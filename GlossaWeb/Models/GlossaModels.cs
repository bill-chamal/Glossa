namespace GlossaWeb.Models;

/// <summary>
/// Application UI theme mode.
/// </summary>
public enum ThemeMode
{
    Dark,
    Light,
    System
}

/// <summary>
/// Application UI localization language.
/// </summary>
public enum AppLanguage
{
    English,
    Greek
}

/// <summary>
/// Status of the ΓΛΩΣΣΑ compiler / interpreter lifecycle.
/// </summary>
public enum ExecutionState
{
    Idle,
    Compiling,
    Running,
    WaitingForInput,
    Completed,
    Error
}

/// <summary>
/// Diagnostic report from the compiler/linter (syntax or semantic error/warning).
/// </summary>
public record DiagnosticEntry(int Line, int Column, string Severity, string Message);

/// <summary>
/// Result of a compilation/transpilation run.
/// </summary>
public class CompilationResult
{
    public bool Success { get; set; }
    public List<DiagnosticEntry> Diagnostics { get; set; } = new();
}

/// <summary>
/// User-configurable editor options.
/// </summary>
public class EditorSettings
{
    public int FontSize { get; set; } = 14;
    public int TabSize { get; set; } = 4;
    public bool WordWrap { get; set; } = false;
    public bool Minimap { get; set; } = true;
    public ThemeMode Theme { get; set; } = ThemeMode.Dark;
}

/// <summary>
/// An individual editor tab representing an open file.
/// </summary>
public class EditorTab
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string FileName { get; set; } = "program.glo";
    public string Content { get; set; } = "";
    public string SavedContent { get; set; } = "";
    public bool IsDirty => Content != SavedContent;
    public string? FilePath { get; set; }
    public bool IsRenaming { get; set; }

    public EditorTab() { }

    public EditorTab(string fileName, string content, string? filePath = null)
    {
        FileName = fileName;
        Content = content;
        SavedContent = content;
        FilePath = filePath;
    }
}

/// <summary>
/// Root opened folder in the workspace explorer.
/// </summary>
public class WorkspaceFolder
{
    public string Name { get; set; } = "";
    public List<WorkspaceItem> Items { get; set; } = new();
}

/// <summary>
/// File or subfolder item inside the opened folder.
/// </summary>
public class WorkspaceItem
{
    public string Name { get; set; } = "";
    public string RelativePath { get; set; } = "";
    public bool IsDirectory { get; set; }
    public bool IsExpanded { get; set; } = true;
    public string? Content { get; set; }
    public List<WorkspaceItem> Children { get; set; } = new();
}

/// <summary>
/// Editor cursor position.
/// </summary>
public class CursorPosition
{
    public int Line { get; set; } = 1;
    public int Column { get; set; } = 1;
}

/// <summary>
/// Line entry displayed in the bottom terminal panel.
/// </summary>
public class TerminalLine
{
    public string Text { get; set; } = "";
    public TerminalLineType Type { get; set; } = TerminalLineType.Output;
    public DateTime Timestamp { get; set; } = DateTime.Now;

    public TerminalLine() { }

    public TerminalLine(string text, TerminalLineType type = TerminalLineType.Output)
    {
        Text = text;
        Type = type;
        Timestamp = DateTime.Now;
    }
}

/// <summary>
/// Terminal line styling type.
/// </summary>
public enum TerminalLineType
{
    Output,
    Error,
    Input,
    System,
    Info
}

/// <summary>
/// Active tab in the bottom VS Code-style panel.
/// </summary>
public enum BottomPanelTab
{
    Terminal,
    Problems,
    BuildOutput
}
