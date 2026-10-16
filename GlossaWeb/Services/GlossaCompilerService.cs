using GlossaWeb.Models;
using Microsoft.JSInterop;

namespace GlossaWeb.Services;

public interface IGlossaExecutionService : IAsyncDisposable
{
    ExecutionState State { get; }
    event Action<string>? OnStdOut;
    event Action<string>? OnStdErr;
    event Action? OnInputRequested;
    event Action<ExecutionState>? OnStateChanged;
    event Action<List<DiagnosticEntry>>? OnDiagnosticsUpdated;

    Task InitializeAsync();
    Task<CompilationResult> CompileAsync(string source);
    Task RunAsync(string source);
    Task SendInputAsync(string input);
    Task StopAsync();
}

public class GlossaRuntimeCallbackHandler
{
    private readonly GlossaCompilerService _service;

    public GlossaRuntimeCallbackHandler(GlossaCompilerService service)
    {
        _service = service;
    }

    [JSInvokable]
    public void OnStdOut(string text) => _service.HandleStdOut(text);

    [JSInvokable]
    public void OnStdErr(string text) => _service.HandleStdErr(text);

    [JSInvokable]
    public void OnInputRequested(string prompt) => _service.HandleInputRequested();

    [JSInvokable]
    public void OnDiagnosticsReported(List<DiagnosticEntry> diagnostics) => _service.HandleDiagnostics(diagnostics);

    [JSInvokable]
    public void OnExecutionCompleted(bool success) => _service.HandleExecutionCompleted(success);
}

public class GlossaCompilerService : IGlossaExecutionService
{
    private readonly IJSRuntime _js;
    private DotNetObjectReference<GlossaRuntimeCallbackHandler>? _dotNetRef;
    private ExecutionState _state = ExecutionState.Idle;

    public ExecutionState State => _state;

    public event Action<string>? OnStdOut;
    public event Action<string>? OnStdErr;
    public event Action? OnInputRequested;
    public event Action<ExecutionState>? OnStateChanged;
    public event Action<List<DiagnosticEntry>>? OnDiagnosticsUpdated;

    public GlossaCompilerService(IJSRuntime js)
    {
        _js = js;
    }

    public Task InitializeAsync()
    {
        _dotNetRef?.Dispose();
        _dotNetRef = DotNetObjectReference.Create(new GlossaRuntimeCallbackHandler(this));
        return Task.CompletedTask;
    }

    private void SetState(ExecutionState newState)
    {
        _state = newState;
        OnStateChanged?.Invoke(_state);
    }

    public async Task<CompilationResult> CompileAsync(string source)
    {
        SetState(ExecutionState.Compiling);
        try
        {
            var result = await _js.InvokeAsync<CompilationResult>("glossaBridge.compile", source);
            OnDiagnosticsUpdated?.Invoke(result.Diagnostics);
            SetState(ExecutionState.Idle);
            return result;
        }
        catch (Exception ex)
        {
            var result = new CompilationResult
            {
                Success = false,
                Diagnostics = new List<DiagnosticEntry>
                {
                    new(1, 1, "Error", ex.Message)
                }
            };
            OnDiagnosticsUpdated?.Invoke(result.Diagnostics);
            SetState(ExecutionState.Error);
            return result;
        }
    }

    public async Task RunAsync(string source)
    {
        if (_state == ExecutionState.Running || _state == ExecutionState.WaitingForInput)
        {
            return;
        }

        if (_dotNetRef == null)
        {
            await InitializeAsync();
        }

        SetState(ExecutionState.Running);
        try
        {
            await _js.InvokeVoidAsync("glossaBridge.run", source, _dotNetRef);
        }
        catch (Exception ex)
        {
            HandleStdErr($"[Σφάλμα εκτέλεσης]: {ex.Message}");
            SetState(ExecutionState.Error);
        }
    }

    public async Task SendInputAsync(string input)
    {
        if (_state == ExecutionState.WaitingForInput)
        {
            SetState(ExecutionState.Running);
            try
            {
                await _js.InvokeVoidAsync("glossaBridge.sendInput", input);
            }
            catch (Exception ex)
            {
                HandleStdErr($"[Σφάλμα εισόδου]: {ex.Message}");
            }
        }
    }

    public async Task StopAsync()
    {
        try
        {
            await _js.InvokeVoidAsync("glossaBridge.stop");
        }
        catch { }
        SetState(ExecutionState.Idle);
    }

    internal void HandleStdOut(string text)
    {
        OnStdOut?.Invoke(text);
    }

    internal void HandleStdErr(string text)
    {
        OnStdErr?.Invoke(text);
    }

    internal void HandleInputRequested()
    {
        SetState(ExecutionState.WaitingForInput);
        OnInputRequested?.Invoke();
    }

    internal void HandleDiagnostics(List<DiagnosticEntry> diagnostics)
    {
        OnDiagnosticsUpdated?.Invoke(diagnostics);
    }

    internal void HandleExecutionCompleted(bool success)
    {
        SetState(success ? ExecutionState.Completed : ExecutionState.Error);
        // After small delay transition back to idle
        Task.Delay(1000).ContinueWith(_ =>
        {
            if (_state == ExecutionState.Completed || _state == ExecutionState.Error)
            {
                SetState(ExecutionState.Idle);
            }
        });
    }

    public ValueTask DisposeAsync()
    {
        _dotNetRef?.Dispose();
        _dotNetRef = null;
        return ValueTask.CompletedTask;
    }
}
