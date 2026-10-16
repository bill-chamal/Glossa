using GlossaWeb.Models;
using Microsoft.JSInterop;

namespace GlossaWeb.Services;

public interface ILocalizationService
{
    AppLanguage CurrentLanguage { get; }
    string LanguageCode { get; }
    event Action? OnLanguageChanged;
    Task InitializeAsync();
    Task SetLanguageAsync(AppLanguage language);
    Task ToggleLanguageAsync();
    string this[string key] { get; }
    string Format(string key, params object[] args);
}

public class LocalizationService : ILocalizationService
{
    private readonly IJSRuntime _js;
    private AppLanguage _currentLanguage = AppLanguage.English;

    public AppLanguage CurrentLanguage => _currentLanguage;
    public string LanguageCode => _currentLanguage == AppLanguage.Greek ? "el" : "en";

    public event Action? OnLanguageChanged;

    private static readonly Dictionary<string, string> EnglishStrings = new()
    {
        // Titlebar & Toolbar
        ["AppTitle"] = "Glossa IDE",
        ["Tag"] = "WASM",
        ["New"] = "New",
        ["NewTooltip"] = "New File (Ctrl+N)",
        ["OpenFile"] = "Open File",
        ["OpenFileTooltip"] = "Open File (Ctrl+O)",
        ["OpenFolder"] = "Open Folder",
        ["OpenFolderTooltip"] = "Open Folder into Explorer",
        ["Save"] = "Save",
        ["SaveTooltip"] = "Save File (Ctrl+S)",
        ["SaveAs"] = "Save As...",
        ["SaveAsTooltip"] = "Save As... (Ctrl+Shift+S)",
        ["Undo"] = "Undo",
        ["UndoTooltip"] = "Undo (Ctrl+Z)",
        ["Redo"] = "Redo",
        ["RedoTooltip"] = "Redo (Ctrl+Y)",
        ["Cut"] = "Cut",
        ["CutTooltip"] = "Cut",
        ["Copy"] = "Copy",
        ["CopyTooltip"] = "Copy",
        ["Paste"] = "Paste",
        ["PasteTooltip"] = "Paste",
        ["Format"] = "Format",
        ["FormatTooltip"] = "Format Document (Shift+Alt+F)",
        ["Run"] = "Run",
        ["RunTooltip"] = "Run Program (F5)",
        ["Stop"] = "Stop",
        ["StopTooltip"] = "Stop Program (Shift+F5)",
        ["ClearConsole"] = "Clear Console",
        ["ClearConsoleTooltip"] = "Clear Terminal Output",
        ["ThemeToggleDark"] = "Switch to Dark Theme",
        ["ThemeToggleLight"] = "Switch to Light Theme",
        ["LangToggle"] = "Switch to Greek (Ελληνικά)",
        ["About"] = "About",
        ["AboutTooltip"] = "About Glossa IDE",

        // Activity Bar
        ["Explorer"] = "Explorer",
        ["Reference"] = "Syntax Reference",
        ["Settings"] = "Settings",

        // Sidebar Explorer
        ["SidebarExplorer"] = "EXPLORER",
        ["OpenEditors"] = "OPEN EDITORS",
        ["Workspace"] = "WORKSPACE",
        ["SamplePrograms"] = "SAMPLE PROGRAMS",
        ["OpenFolderBtn"] = "Open Folder...",

        // Sample Programs
        ["SampleHelloWorld"] = "Hello World",
        ["SampleHelloWorldDesc"] = "Basic output statement (ΓΡΑΨΕ)",
        ["SampleSum"] = "Sum of Two Numbers",
        ["SampleSumDesc"] = "Variables, input (ΔΙΑΒΑΣΕ) and arithmetic",
        ["SampleMax"] = "Find Maximum of Three",
        ["SampleMaxDesc"] = "Conditional logic with nested ΑΝ",
        ["SampleSort"] = "Bubble Sort",
        ["SampleSortDesc"] = "Arrays and nested ΓΙΑ repetition loops",

        // Sidebar Reference
        ["SidebarReference"] = "GLOSSA SYNTAX REFERENCE",
        ["RefStructure"] = "Algorithm Structure",
        ["RefIO"] = "Input / Output (ΔΙΑΒΑΣΕ / ΓΡΑΨΕ)",
        ["RefConditional"] = "Conditional Logic (ΑΝ...ΤΟΤΕ / ΕΠΙΛΕΞΕ)",
        ["RefRepetition"] = "Repetition Loops (ΟΣΟ / ΓΙΑ / ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ)",
        ["RefDataTypes"] = "Data Types & Operators",

        // Sidebar Settings
        ["SidebarSettings"] = "SETTINGS",
        ["EditorSettings"] = "Editor Settings",
        ["FontSize"] = "Font Size",
        ["TabSize"] = "Tab Size",
        ["WordWrap"] = "Word Wrap",
        ["Minimap"] = "Minimap",
        ["Theme"] = "Theme",
        ["ThemeDark"] = "Dark (VS Code Dark+)",
        ["ThemeLight"] = "Light (VS Code Light+)",
        ["Language"] = "Interface Language",
        ["LanguageEn"] = "English",
        ["LanguageEl"] = "Ελληνικά (Greek)",

        // Sidebar About
        ["SidebarAbout"] = "ABOUT GLOSSA IDE",
        ["AboutHeading"] = "Glossa IDE — Γλώσσα WebAssembly",
        ["AboutSubheading"] = "A modern, high-density Web IDE for ΓΛΩΣΣΑ (Glossa) — the educational programming language taught in Greek senior high schools and tested in Panhellenic university-entrance examinations.",
        ["AboutStack"] = "Technology Stack",
        ["AboutCurriculum"] = "Curriculum & Panhellenic Exams",
        ["AboutCurriculumText"] = "Built to match the official Hellenic Ministry of Education computer science textbook for the 3rd Grade of Lyceum (General Senior High School), adhering fully to the official specifications and syntax of ΓΛΩΣΣΑ.",
        ["AboutLinks"] = "Open Source & Links",

        // Terminal Panel
        ["Terminal"] = "Terminal",
        ["Problems"] = "Problems",
        ["BuildOutput"] = "Build Output",
        ["WaitingForInput"] = "Waiting for user input...",
        ["InputPlaceholder"] = "Enter value and press Enter...",
        ["NoProblems"] = "No problems detected in the current file.",
        ["ClearLogs"] = "Clear",

        // Status Bar
        ["StateIdle"] = "Ready",
        ["StateCompiling"] = "Compiling...",
        ["StateRunning"] = "Running...",
        ["StateWaiting"] = "Waiting for input...",
        ["StateCompleted"] = "Execution completed",
        ["StateError"] = "Execution error",
        ["StatusLineCol"] = "Ln {0}, Col {1}",

        // Modals / Dialogs
        ["UnsavedTitle"] = "Unsaved Changes",
        ["UnsavedPrompt"] = "Do you want to save the changes you made to \"{0}\"?",
        ["UnsavedWarning"] = "Your changes will be lost if you don't save them.",
        ["BtnSave"] = "Save",
        ["BtnDontSave"] = "Don't Save",
        ["BtnCancel"] = "Cancel",
        ["NewTabTooltip"] = "New File (Ctrl+N)",
        ["CloseTabTooltip"] = "Close (Ctrl+W)"
    };

    private static readonly Dictionary<string, string> GreekStrings = new()
    {
        // Titlebar & Toolbar
        ["AppTitle"] = "Glossa IDE",
        ["Tag"] = "WASM",
        ["New"] = "Νέο",
        ["NewTooltip"] = "Νέο Αρχείο (Ctrl+N)",
        ["OpenFile"] = "Άνοιγμα",
        ["OpenFileTooltip"] = "Άνοιγμα Αρχείου (Ctrl+O)",
        ["OpenFolder"] = "Φάκελος",
        ["OpenFolderTooltip"] = "Άνοιγμα Φακέλου στην Εξερεύνηση",
        ["Save"] = "Αποθήκευση",
        ["SaveTooltip"] = "Αποθήκευση Αρχείου (Ctrl+S)",
        ["SaveAs"] = "Αποθήκευση ως...",
        ["SaveAsTooltip"] = "Αποθήκευση ως... (Ctrl+Shift+S)",
        ["Undo"] = "Αναίρεση",
        ["UndoTooltip"] = "Αναίρεση (Ctrl+Z)",
        ["Redo"] = "Επανάληψη",
        ["RedoTooltip"] = "Επανάληψη (Ctrl+Y)",
        ["Cut"] = "Αποκοπή",
        ["CutTooltip"] = "Αποκοπή",
        ["Copy"] = "Αντιγραφή",
        ["CopyTooltip"] = "Αντιγραφή",
        ["Paste"] = "Επικόλληση",
        ["PasteTooltip"] = "Επικόλληση",
        ["Format"] = "Μορφοποίηση",
        ["FormatTooltip"] = "Μορφοποίηση Κώδικα (Shift+Alt+F)",
        ["Run"] = "Εκτέλεση",
        ["RunTooltip"] = "Εκτέλεση Προγράμματος (F5)",
        ["Stop"] = "Διακοπή",
        ["StopTooltip"] = "Διακοπή Προγράμματος (Shift+F5)",
        ["ClearConsole"] = "Καθαρισμός",
        ["ClearConsoleTooltip"] = "Καθαρισμός Εξόδου Τερματικού",
        ["ThemeToggleDark"] = "Αλλαγή σε Σκούρο Θέμα",
        ["ThemeToggleLight"] = "Αλλαγή σε Φωτεινό Θέμα",
        ["LangToggle"] = "Αλλαγή σε Αγγλικά (English)",
        ["About"] = "Σχετικά",
        ["AboutTooltip"] = "Σχετικά με το Glossa IDE",

        // Activity Bar
        ["Explorer"] = "Εξερεύνηση",
        ["Reference"] = "Οδηγός Σύνταξης",
        ["Settings"] = "Ρυθμίσεις",

        // Sidebar Explorer
        ["SidebarExplorer"] = "ΕΞΕΡΕΥΝΗΣΗ",
        ["OpenEditors"] = "ΑΝΟΙΧΤΑ ΑΡΧΕΙΑ",
        ["Workspace"] = "ΧΩΡΟΣ ΕΡΓΑΣΙΑΣ",
        ["SamplePrograms"] = "ΔΕΙΓΜΑΤΑ ΠΡΟΓΡΑΜΜΑΤΩΝ",
        ["OpenFolderBtn"] = "Άνοιγμα Φακέλου...",

        // Sample Programs
        ["SampleHelloWorld"] = "Χαίρε Κόσμε",
        ["SampleHelloWorldDesc"] = "Βασική εντολή εξόδου (ΓΡΑΨΕ)",
        ["SampleSum"] = "Άθροισμα Δύο Αριθμών",
        ["SampleSumDesc"] = "Μεταβλητές, είσοδος (ΔΙΑΒΑΣΕ) και αριθμητική",
        ["SampleMax"] = "Μέγιστος Τριών Αριθμών",
        ["SampleMaxDesc"] = "Δομή επιλογής με φωλιασμένα ΑΝ",
        ["SampleSort"] = "Ταξινόμηση Φυσαλίδας",
        ["SampleSortDesc"] = "Πίνακες και φωλιασμένες επαναλήψεις ΓΙΑ",

        // Sidebar Reference
        ["SidebarReference"] = "ΟΔΗΓΟΣ ΣΥΝΤΑΞΗΣ ΓΛΩΣΣΑΣ",
        ["RefStructure"] = "Δομή Αλγορίθμου",
        ["RefIO"] = "Είσοδος / Έξοδος (ΔΙΑΒΑΣΕ / ΓΡΑΨΕ)",
        ["RefConditional"] = "Δομές Επιλογής (ΑΝ...ΤΟΤΕ / ΕΠΙΛΕΞΕ)",
        ["RefRepetition"] = "Δομές Επανάληψης (ΟΣΟ / ΓΙΑ / ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ)",
        ["RefDataTypes"] = "Τύποι Δεδομένων & Τελεστές",

        // Sidebar Settings
        ["SidebarSettings"] = "ΡΥΘΜΙΣΕΙΣ",
        ["EditorSettings"] = "Ρυθμίσεις Συντάκτη",
        ["FontSize"] = "Μέγεθος Γραμματοσειράς",
        ["TabSize"] = "Μέγεθος Tab",
        ["WordWrap"] = "Αναδίπλωση Γραμμής",
        ["Minimap"] = "Χάρτης Κώδικα (Minimap)",
        ["Theme"] = "Θέμα",
        ["ThemeDark"] = "Σκούρο (VS Code Dark+)",
        ["ThemeLight"] = "Φωτεινό (VS Code Light+)",
        ["Language"] = "Γλώσσα Διεπαφής",
        ["LanguageEn"] = "English (Αγγλικά)",
        ["LanguageEl"] = "Ελληνικά",

        // Sidebar About
        ["SidebarAbout"] = "ΣΧΕΤΙΚΑ ΜΕ ΤΟ GLOSSA IDE",
        ["AboutHeading"] = "Glossa IDE — Γλώσσα WebAssembly",
        ["AboutSubheading"] = "Ένα σύγχρονο, προηγμένο διαδικτυακό περιβάλλον ανάπτυξης για τη ΓΛΩΣΣΑ — την εκπαιδευτική γλώσσα προγραμματισμού που διδάσκεται στο Γενικό Λύκειο και εξετάζεται στις Πανελλαδικές Εξετάσεις.",
        ["AboutStack"] = "Τεχνολογίες",
        ["AboutCurriculum"] = "Διδακτέα Ύλη & Πανελλαδικές",
        ["AboutCurriculumText"] = "Σχεδιασμένο σύμφωνα με το επίσημο σχολικό εγχειρίδιο Πληροφορικής της Γ' Λυκείου του Υπουργείου Παιδείας, ακολουθώντας πιστά τις επίσημες προδιαγραφές και τη σύνταξη της ΓΛΩΣΣΑΣ.",
        ["AboutLinks"] = "Ανοιχτός Κώδικας & Σύνδεσμοι",

        // Terminal Panel
        ["Terminal"] = "Τερματικό",
        ["Problems"] = "Σφάλματα",
        ["BuildOutput"] = "Έξοδος Μεταγλώττισης",
        ["WaitingForInput"] = "Αναμονή εισαγωγής από τον χρήστη...",
        ["InputPlaceholder"] = "Πληκτρολογήστε τιμή και πατήστε Enter...",
        ["NoProblems"] = "Δεν εντοπίστηκαν σφάλματα στο τρέχον αρχείο.",
        ["ClearLogs"] = "Καθαρισμός",

        // Status Bar
        ["StateIdle"] = "Έτοιμο",
        ["StateCompiling"] = "Μεταγλώττιση...",
        ["StateRunning"] = "Εκτέλεση...",
        ["StateWaiting"] = "Αναμονή εισόδου...",
        ["StateCompleted"] = "Η εκτέλεση ολοκληρώθηκε",
        ["StateError"] = "Σφάλμα εκτέλεσης",
        ["StatusLineCol"] = "Γραμ {0}, Στηλ {1}",

        // Modals / Dialogs
        ["UnsavedTitle"] = "Μη Αποθηκευμένες Αλλαγές",
        ["UnsavedPrompt"] = "Θέλετε να αποθηκεύσετε τις αλλαγές που κάνατε στο \"{0}\";",
        ["UnsavedWarning"] = "Οι αλλαγές σας θα χαθούν εάν δεν τις αποθηκεύσετε.",
        ["BtnSave"] = "Αποθήκευση",
        ["BtnDontSave"] = "Απόρριψη",
        ["BtnCancel"] = "Ακύρωση",
        ["NewTabTooltip"] = "Νέο Αρχείο (Ctrl+N)",
        ["CloseTabTooltip"] = "Κλείσιμο (Ctrl+W)"
    };

    public LocalizationService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task InitializeAsync()
    {
        try
        {
            var saved = await _js.InvokeAsync<string?>("localStorage.getItem", "glossa-lang");
            if (!string.IsNullOrEmpty(saved))
            {
                _currentLanguage = saved.StartsWith("el", StringComparison.OrdinalIgnoreCase)
                    ? AppLanguage.Greek
                    : AppLanguage.English;
            }
        }
        catch
        {
            _currentLanguage = AppLanguage.English;
        }
    }

    public async Task SetLanguageAsync(AppLanguage language)
    {
        if (_currentLanguage == language) return;
        _currentLanguage = language;

        try
        {
            await _js.InvokeVoidAsync("localStorage.setItem", "glossa-lang", LanguageCode);
        }
        catch
        {
            // ignore localStorage quota/disabled exceptions
        }

        OnLanguageChanged?.Invoke();
    }

    public async Task ToggleLanguageAsync()
    {
        var next = _currentLanguage == AppLanguage.English ? AppLanguage.Greek : AppLanguage.English;
        await SetLanguageAsync(next);
    }

    public string this[string key]
    {
        get
        {
            var dict = _currentLanguage == AppLanguage.Greek ? GreekStrings : EnglishStrings;
            if (dict.TryGetValue(key, out var val))
            {
                return val;
            }
            if (EnglishStrings.TryGetValue(key, out var fallback))
            {
                return fallback;
            }
            return key;
        }
    }

    public string Format(string key, params object[] args)
    {
        var template = this[key];
        try
        {
            return string.Format(template, args);
        }
        catch
        {
            return template;
        }
    }
}
