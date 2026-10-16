using GlossaWeb.Models;
using Microsoft.JSInterop;

namespace GlossaWeb.Services;

public interface IThemeService
{
    ThemeMode CurrentTheme { get; }
    string CssThemeName { get; }
    string MonacoThemeName { get; }
    event Action? OnThemeChanged;
    Task InitializeAsync();
    Task ToggleThemeAsync();
    Task SetThemeAsync(ThemeMode mode);
}

public class ThemeService : IThemeService
{
    private readonly IJSRuntime _js;
    private ThemeMode _currentTheme = ThemeMode.Dark;

    public ThemeMode CurrentTheme => _currentTheme;
    public string CssThemeName => _currentTheme == ThemeMode.Light ? "light" : "dark";
    public string MonacoThemeName => _currentTheme == ThemeMode.Light ? "glossa-light" : "glossa-dark";

    public event Action? OnThemeChanged;

    public ThemeService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task InitializeAsync()
    {
        try
        {
            var savedTheme = await _js.InvokeAsync<string?>("localStorage.getItem", "glossa-theme");
            if (!string.IsNullOrEmpty(savedTheme))
            {
                if (Enum.TryParse<ThemeMode>(savedTheme, true, out var mode))
                {
                    _currentTheme = mode;
                }
            }
            else
            {
                // Check prefers-color-scheme
                var prefersLight = await _js.InvokeAsync<bool>("eval", "window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches");
                _currentTheme = prefersLight ? ThemeMode.Light : ThemeMode.Dark;
            }
        }
        catch
        {
            _currentTheme = ThemeMode.Dark;
        }

        await ApplyThemeDomAsync();
    }

    public async Task ToggleThemeAsync()
    {
        var next = _currentTheme == ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
        await SetThemeAsync(next);
    }

    public async Task SetThemeAsync(ThemeMode mode)
    {
        _currentTheme = mode;
        try
        {
            await _js.InvokeVoidAsync("localStorage.setItem", "glossa-theme", mode.ToString());
        }
        catch { }

        await ApplyThemeDomAsync();
        OnThemeChanged?.Invoke();
    }

    private async Task ApplyThemeDomAsync()
    {
        try
        {
            await _js.InvokeVoidAsync("eval", $"document.documentElement.setAttribute('data-theme', '{CssThemeName}')");
        }
        catch { }
    }
}
