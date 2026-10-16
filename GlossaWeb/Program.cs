using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using GlossaWeb;
using GlossaWeb.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// IDE & Compiler Services
builder.Services.AddScoped<IThemeService, ThemeService>();
builder.Services.AddScoped<ILocalizationService, LocalizationService>();
builder.Services.AddScoped<IFileService, FileService>();
builder.Services.AddScoped<IEditorInteropService, EditorInteropService>();
builder.Services.AddScoped<IGlossaExecutionService, GlossaCompilerService>();

await builder.Build().RunAsync();
