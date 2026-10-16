using GlossaWeb.Models;
using Microsoft.JSInterop;

namespace GlossaWeb.Services;

public interface IEditorInteropService : IAsyncDisposable
{
    event Action<string, string>? OnContentChanged;
    event Action<int, int>? OnCursorChanged;

    Task InitializeAsync(string containerId, string initialTabId, string initialContent, string theme);
    Task SwitchTabAsync(string tabId, string initialContent);
    Task CloseTabAsync(string tabId);
    Task<string> GetContentAsync();
    Task SetContentAsync(string content);
    Task SetThemeAsync(string themeName);
    Task SetMarkersAsync(List<DiagnosticEntry> diagnostics);
    Task ClearMarkersAsync();
    Task RevealLineAsync(int line);
    Task<CursorPosition> GetCursorPositionAsync();
    Task UndoAsync();
    Task RedoAsync();
    Task FormatDocumentAsync();
    Task<string> GetSelectedTextAsync();
    Task InsertTextAsync(string text);
    Task UpdateOptionsAsync(EditorSettings settings);
}

public class EditorCallbackHandler
{
    private readonly Action<string, string> _contentChanged;
    private readonly Action<int, int> _cursorChanged;

    public EditorCallbackHandler(Action<string, string> contentChanged, Action<int, int> cursorChanged)
    {
        _contentChanged = contentChanged;
        _cursorChanged = cursorChanged;
    }

    [JSInvokable]
    public void OnEditorContentChanged(string tabId, string content) => _contentChanged(tabId, content);

    [JSInvokable]
    public void OnCursorPositionChanged(int line, int column) => _cursorChanged(line, column);
}

public class EditorInteropService : IEditorInteropService
{
    private readonly IJSRuntime _js;
    private DotNetObjectReference<EditorCallbackHandler>? _dotNetRef;

    public event Action<string, string>? OnContentChanged;
    public event Action<int, int>? OnCursorChanged;

    public EditorInteropService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task InitializeAsync(string containerId, string initialTabId, string initialContent, string theme)
    {
        _dotNetRef?.Dispose();
        var handler = new EditorCallbackHandler(
            (tabId, content) => OnContentChanged?.Invoke(tabId, content),
            (line, col) => OnCursorChanged?.Invoke(line, col)
        );
        _dotNetRef = DotNetObjectReference.Create(handler);

        await _js.InvokeVoidAsync("monacoInterop.initialize", containerId, initialTabId, initialContent, theme, _dotNetRef);
    }

    public async Task SwitchTabAsync(string tabId, string initialContent)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.switchTabModel", tabId, initialContent);
        }
        catch { }
    }

    public async Task CloseTabAsync(string tabId)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.closeTabModel", tabId);
        }
        catch { }
    }

    public async Task<string> GetContentAsync()
    {
        try
        {
            return await _js.InvokeAsync<string>("monacoInterop.getContent");
        }
        catch
        {
            return string.Empty;
        }
    }

    public async Task SetContentAsync(string content)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.setContent", content);
        }
        catch { }
    }

    public async Task SetThemeAsync(string themeName)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.setTheme", themeName);
        }
        catch { }
    }

    public async Task SetMarkersAsync(List<DiagnosticEntry> diagnostics)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.setMarkers", diagnostics);
        }
        catch { }
    }

    public async Task ClearMarkersAsync()
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.clearMarkers");
        }
        catch { }
    }

    public async Task RevealLineAsync(int line)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.revealLine", line);
        }
        catch { }
    }

    public async Task<CursorPosition> GetCursorPositionAsync()
    {
        try
        {
            return await _js.InvokeAsync<CursorPosition>("monacoInterop.getCursorPosition");
        }
        catch
        {
            return new CursorPosition { Line = 1, Column = 1 };
        }
    }

    public async Task UndoAsync()
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.undo");
        }
        catch { }
    }

    public async Task RedoAsync()
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.redo");
        }
        catch { }
    }

    public async Task FormatDocumentAsync()
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.formatDocument");
        }
        catch { }
    }

    public async Task<string> GetSelectedTextAsync()
    {
        try
        {
            return await _js.InvokeAsync<string>("monacoInterop.getSelectedText");
        }
        catch
        {
            return string.Empty;
        }
    }

    public async Task InsertTextAsync(string text)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.insertText", text);
        }
        catch { }
    }

    public async Task UpdateOptionsAsync(EditorSettings settings)
    {
        try
        {
            await _js.InvokeVoidAsync("monacoInterop.updateOptions", new
            {
                fontSize = settings.FontSize,
                wordWrap = settings.WordWrap,
                tabSize = settings.TabSize,
                minimap = settings.Minimap
            });
        }
        catch { }
    }

    public ValueTask DisposeAsync()
    {
        try
        {
            _dotNetRef?.Dispose();
            _dotNetRef = null;
        }
        catch { }
        return ValueTask.CompletedTask;
    }
}
