using GlossaWeb.Models;
using Microsoft.JSInterop;

namespace GlossaWeb.Services;

public interface IFileService
{
    Task<(string Name, string Content)?> OpenFileAsync();
    Task<WorkspaceFolder?> OpenDirectoryAsync();
    Task<(bool Success, string FileName)> SaveFileAsync(string fileName, string content);
    Task<(bool Success, string FileName)> SaveAsFileAsync(string fileName, string content);
    Task<bool> CopyToClipboardAsync(string text);
    Task<string> ReadFromClipboardAsync();
}

public class FileService : IFileService
{
    private readonly IJSRuntime _js;

    private class OpenFileResult
    {
        public string? Name { get; set; }
        public string? Content { get; set; }
    }

    private class SaveResult
    {
        public bool Success { get; set; }
        public string? FileName { get; set; }
        public bool Aborted { get; set; }
    }

    public FileService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task<(string Name, string Content)?> OpenFileAsync()
    {
        try
        {
            var result = await _js.InvokeAsync<OpenFileResult?>("fileInterop.openFile");
            if (result != null && !string.IsNullOrEmpty(result.Name))
            {
                return (result.Name, result.Content ?? "");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error opening file: {ex.Message}");
        }
        return null;
    }

    public async Task<WorkspaceFolder?> OpenDirectoryAsync()
    {
        try
        {
            return await _js.InvokeAsync<WorkspaceFolder?>("fileInterop.openDirectory");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error opening directory: {ex.Message}");
            return null;
        }
    }

    public async Task<(bool Success, string FileName)> SaveFileAsync(string fileName, string content)
    {
        try
        {
            var result = await _js.InvokeAsync<SaveResult?>("fileInterop.saveFile", fileName, content);
            if (result != null && result.Success)
            {
                return (true, result.FileName ?? fileName);
            }
            return (false, fileName);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error saving file: {ex.Message}");
            return (false, fileName);
        }
    }

    public async Task<(bool Success, string FileName)> SaveAsFileAsync(string fileName, string content)
    {
        try
        {
            var result = await _js.InvokeAsync<SaveResult?>("fileInterop.saveAsFile", fileName, content);
            if (result != null && result.Success)
            {
                return (true, result.FileName ?? fileName);
            }
            return (false, fileName);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error saving file as: {ex.Message}");
            return (false, fileName);
        }
    }

    public async Task<bool> CopyToClipboardAsync(string text)
    {
        try
        {
            return await _js.InvokeAsync<bool>("fileInterop.copyToClipboard", text);
        }
        catch
        {
            return false;
        }
    }

    public async Task<string> ReadFromClipboardAsync()
    {
        try
        {
            return await _js.InvokeAsync<string>("fileInterop.readFromClipboard");
        }
        catch
        {
            return string.Empty;
        }
    }
}
