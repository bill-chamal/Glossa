using FastColoredTextBoxNS;
using GLOSSA.Properties;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;
using GLOSSA;
using System.Configuration;


namespace GLOSSA
{
    public partial class Form1 : Form
    {
        public string REGISTER;
        string FileFilter = "Glossa(*.gl)|*.gl|Γλώσσα(*.glo)|*.glo|Αλγόριθμος σε ψευδογλώσσα(*.psg)|*.psg|Πρόγραμμα σε Γλώσσα(*.psc)|*.psc|Text Document(*.txt)|* .txt|HTML File(* .html)|* .html|CSS File(* .css)|*.css|JavaScript File(* .js)|* .js|VBScript Script File(* .vbs)|* .vbs|Windows Batch File(* .bat)|* .bat|All Files(* . *)|*.*";
        bool NeedSave = false;
        string path = string.Empty;
        string ExePath;
        AutocompleteMenu popupMenu;
        string[] keywords = { "ΠΡΟΓΡΑΜΜΑ", "ΣΤΑΘΕΡΕΣ", "ΜΕΤΑΒΛΗΤΕΣ", "ΑΡΧΗ\n", "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ", "ΔΙΑΔΙΚΑΣΙΑ", "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΣΥΝΑΡΤΗΣΗ", "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ", "ΕΠΙΛΕΞΕ", "ΠΕΡΙΠΤΩΣΗ", "ΓΡΑΨΕ", "ΔΙΑΒΑΣΕ", "ΤΕΛΟΣ_ΑΝ", "ΑΛΛΙΩΣ_ΑΝ", "ΑΛΛΙΩΣ", "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ", "ΜΕΧΡΙΣ_ΟΤΟΥ", "ΜΕ_ΒΗΜΑ", "ΚΑΛΕΣΕ", "Α_Μ(^)", "Α_Τ(^)", "Ε(^)", "ΕΦ(^)", "ΗΜ(^)", "ΣΥΝ(^)", "ΛΟΓ(^)", "Τ_Ρ(^)", "Η", "ΚΑΙ", "ΟΧΙ", "ΧΑΡΑΚΤΗΡΕΣ: ", "ΠΡΑΓΜΑΤΙΚΕΣ: ", "ΛΟΓΙΚΕΣ: ", ":ΑΚΕΡΑΙΑ", ":ΠΡΑΓΜΑΤΙΚΗ", ":ΧΑΡΑΚΤΗΡΑΣ", ":ΛΟΓΙΚΗ", "ΨΕΥΔΗΣ", "ΑΚΕΡΑΙΕΣ: " };
        string[] methods = { "'<>' ^", "GetHashCode()", "GetType()", "ToString()" };
        string[] snippets = { "ΑΝ ^ ΤΟΤΕ\nΤΕΛΟΣ_ΑΝ", "ΑΝ ^ ΤΟΤΕ\nΑΛΛΙΩΣ\nΤΕΛΟΣ_ΑΝ", "ΟΣΟ ^ ΕΠΑΝΑΛΑΒΕ\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "ΓΙΑ ^ ΑΠΟ  ΜΕΧΡΙ\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "ΠΡΟΓΡΑΜΜΑ ^ \nΜΕΤΑΒΛΗΤΕΣ\n ΑΚΕΡΑΙΕΣ: \n ΠΡΑΓΜΑΤΙΚΕΣ: \n ΧΑΡΑΚΤΗΡΕΣ: \nΑΡΧΗ\n\n\nΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ", "ΔΙΑΔΙΚΑΣΙΑ ^ \nΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΣΥΝΑΡΤΗΣΗ ^ \nΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ", "ΑΛΛΙΩΣ_ΑΝ ^ ΤΟΤΕ", "ΔΙΑΔΙΚΑΣΙΑ ^ \nΜΕΤΑΒΛΗΤΕΣ\n ΑΚΕΡΑΙΕΣ: \n ΠΡΑΓΜΑΤΙΚΕΣ: \n ΧΑΡΑΚΤΗΡΕΣ: \nΑΡΧΗ \n\nΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΣΥΝΑΡΤΗΣΗ ^ :\nΜΕΤΑΒΛΗΤΕΣ\n ΑΚΕΡΑΙΕΣ: \n ΠΡΑΓΜΑΤΙΚΕΣ: \n ΧΑΡΑΚΤΗΡΕΣ: \nΑΡΧΗ \n\nΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ", "ΕΠΙΛΕΞΕ ^ \n ΠΕΡΙΠΤΩΣΗ ΑΛΛΙΩΣ \n ΤΕΛΟΣ_ΕΠΟΛΟΓΩΝ" };
       /* string[] declarationSnippets = {
               "public class ^\n{\n}", "private class ^\n{\n}", "internal class ^\n{\n}",
               "public struct ^\n{\n;\n}", "private struct ^\n{\n;\n}", "internal struct ^\n{\n;\n}",
               "public void ^()\n{\n;\n}", "private void ^()\n{\n;\n}", "internal void ^()\n{\n;\n}", "protected void ^()\n{\n;\n}",
               "public ^{ get; set; }", "private ^{ get; set; }", "internal ^{ get; set; }", "protected ^{ get; set; }"
               };
       */
        string AppName = "Glossa";
        public Form1()
        {
            Thread t = new Thread(new ThreadStart(splashStart));
            t.Start();

            ExePath = Application.ExecutablePath;
            Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo(Settings.Default.Language); //change language, then Initialize
            InitializeComponent();
            TableColorc.GoogleColorTable tableColorc = new TableColorc.GoogleColorTable();
            //create autocomplete popup menu
            popupMenu = new AutocompleteMenu(richTextBox1);
            popupMenu.ForeColor = Color.Black;
            popupMenu.BackColor = tableColorc.GoogleHover;
            popupMenu.SelectedColor = Color.FromArgb(150, 150, 150);
            popupMenu.MinFragmentLength = 2;
            popupMenu.Items.MaximumSize = new System.Drawing.Size(450, 300);
            popupMenu.Items.Width = 200;
            //popupMenu.Items.ImageList = imageList1;
            popupMenu.SearchPattern = @"[\w\.:=!<>]";
            popupMenu.AllowTabKey = true;

            if (!Settings.Default.WinLocation.IsEmpty)
            {
                Bounds = Settings.Default.WinLocation;
                StartPosition = FormStartPosition.Manual;
            }

            //add style explicitly to control for define priority of style drawing
            richTextBox1.AddStyle(YellowStyle);//render first
            richTextBox1.AddStyle(RedStyle);//red will be rendering over yellow
            richTextBox1.AddStyle(GreenStyle);//green will be rendering over yellow and red
            richTextBox1.AddStyle(BlueStyle);
            richTextBox1.AddStyle(shortCutStyle);//render last, over all other styles

            string register = null;
            Settings.Default.Register = register;

            ProcessCommandLineInput();
            //LoadSettings();
            BuildAutocompleteMenu();
            menuStrip1.Renderer = new ToolStripProfessionalRenderer(new TableColorc.GoogleColorTable());
            contextMenuStrip1.Renderer = new ToolStripProfessionalRenderer(new TableColorc.GoogleColorTable());
            statusStrip1.Renderer = new ToolStripProfessionalRenderer(new TableColorc.GoogleColorTable());
            cmMark.Renderer = new ToolStripProfessionalRenderer(new TableColorc.GoogleColorTable());
            t.Abort();
        }

        private void ProcessCommandLineInput()
        {
            string[] commandLineArguments = System.Environment.GetCommandLineArgs();
            if (commandLineArguments.Length > 1)
            {
                try
                {
                    var sr = new StreamReader(commandLineArguments[1]);
                    richTextBox1.Text = sr.ReadToEnd();
                    sr.Close();
                    Text = Path.GetFileName(commandLineArguments[1]) + " - " + AppName;
                    NeedSave = false;
                    path = commandLineArguments[1];
                }
                catch (System.Exception ex)
                {
                    MessageBox.Show(string.Format("Cannot load {0}:\r\n{1}", commandLineArguments[1], ex.Message), "Error");
                }
            }
        }

        #region ColorText
        private void BuildAutocompleteMenu()
        {
            List<AutocompleteItem> items = new List<AutocompleteItem>();

            foreach (var item in snippets)
                items.Add(new SnippetAutocompleteItem(item) { ImageIndex = 1 });
            //foreach (var item in declarationSnippets)
            //    items.Add(new DeclarationSnippet(item) { ImageIndex = 0 });
            foreach (var item in methods)
                items.Add(new MethodAutocompleteItem(item) { ImageIndex = 2 });
            foreach (var item in keywords)
                items.Add(new AutocompleteItem(item));

            items.Add(new InsertSpaceSnippet());
            items.Add(new InsertSpaceSnippet(@"^(\w+)([=<>!:]+)(\w+)$"));
            items.Add(new InsertEnterSnippet());

            //set as autocomplete source
            popupMenu.Items.SetAutocompleteItems(items);
        }
        class DeclarationSnippet : SnippetAutocompleteItem
        {
            public DeclarationSnippet(string snippet)
                : base(snippet)
            {
            }

            public override CompareResult Compare(string fragmentText)
            {
                var pattern = Regex.Escape(fragmentText);
                if (Regex.IsMatch(Text, "\\b" + pattern, RegexOptions.IgnoreCase))
                    return CompareResult.Visible;
                return CompareResult.Hidden;
            }
        }

        /// <summary>
        /// Divides numbers and words: "123AND456" -> "123 AND 456"
        /// Or "i=2" -> "i = 2"
        /// </summary>
        class InsertSpaceSnippet : AutocompleteItem
        {
            string pattern;

            public InsertSpaceSnippet(string pattern) : base("")
            {
                this.pattern = pattern;
            }

            public InsertSpaceSnippet()
                : this(@"^(\d+)([a-zA-Z_]+)(\d*)$")
            {
            }

            public override CompareResult Compare(string fragmentText)
            {
                if (Regex.IsMatch(fragmentText, pattern))
                {
                    Text = InsertSpaces(fragmentText);
                    if (Text != fragmentText)
                        return CompareResult.Visible;
                }
                return CompareResult.Hidden;
            }

            public string InsertSpaces(string fragment)
            {
                var m = Regex.Match(fragment, pattern);
                if (m == null)
                    return fragment;
                if (m.Groups[1].Value == "" && m.Groups[3].Value == "")
                    return fragment;
                return (m.Groups[1].Value + " " + m.Groups[2].Value + " " + m.Groups[3].Value).Trim();
            }

            public override string ToolTipTitle
            {
                get
                {
                    return Text;
                }
            }
        }

        /// <summary>
        /// Inerts line break after '}'
        /// </summary>
        class InsertEnterSnippet : AutocompleteItem
        {
            Place enterPlace = Place.Empty;

            public InsertEnterSnippet()
                : base("[Line break]")
            {
            }

            public override CompareResult Compare(string fragmentText)
            {
                var r = Parent.Fragment.Clone();
                while (r.Start.iChar > 0)
                {
                    if (r.CharBeforeStart == '}')
                    {
                        enterPlace = r.Start;
                        return CompareResult.Visible;
                    }

                    r.GoLeftThroughFolded();
                }

                return CompareResult.Hidden;
            }

            public override string GetTextForReplace()
            {
                //extend range
                Range r = Parent.Fragment;
                Place end = r.End;
                r.Start = enterPlace;
                r.End = r.End;
                //insert line break
                return Environment.NewLine + r.Text;
            }

            public override void OnSelected(AutocompleteMenu popupMenu, SelectedEventArgs e)
            {
                base.OnSelected(popupMenu, e);
                if (Parent.Fragment.tb.AutoIndent)
                    Parent.Fragment.tb.DoAutoIndent();
            }

            public override string ToolTipTitle
            {
                get
                {
                    return "Insert line break after '}'";
                }
            }
        }


        #endregion ColorText

        public void SaveSettings()
        {
            Settings.Default.TopMost_US = TopMost;
            Settings.Default.RichCodeFont = richTextBox1.Font;
            Settings.Default.RichCodeWordWrap = richTextBox1.WordWrap;
            Settings.Default.RichCodeCurrentLineColor = richTextBox1.CurrentLineColor;
            Settings.Default.RichCodeBGColor = richTextBox1.BackColor;
            if (FileBrowser.Url.ToString() != string.Empty)
                Settings.Default.WorkingPath = FileBrowser.Url;
            Settings.Default.WinLocation = Bounds;
            Settings.Default.TreeFont = treeView1.Font;
            Settings.Default.ApplicationFont = Form1.DefaultFont;
            Settings.Default.RichCodeVCP = richTextBox1.VirtualSpace;
            Settings.Default.RichCodeADrop = richTextBox1.AllowDrop;
            Settings.Default.RichCodeSeleColor = richTextBox1.SelectionColor;
            Settings.Default.RichCodeNumColor = richTextBox1.LineNumberColor;
            Settings.Default.RichCodePreakColor = richTextBox1.BookmarkColor;
            //Settings.Default.RichCodeCurrentLColor = richTextBox1.CurrentLineColor;
            Settings.Default.Save();
        }

        public void LoadSettings()
        {
            FileBrowser.Url = Settings.Default.WorkingPath;
            TopMost = Settings.Default.TopMost_US;
            richTextBox1.Font = Settings.Default.RichCodeFont;
            richTextBox1.WordWrap = Settings.Default.RichCodeWordWrap;
            richTextBox1.CurrentLineColor = Settings.Default.RichCodeCurrentLineColor;
            richTextBox1.BackColor = Settings.Default.RichCodeBGColor;
            treeView1.Font = Settings.Default.TreeFont;
            Font = Settings.Default.ApplicationFont;
            richTextBox1.VirtualSpace = Settings.Default.RichCodeVCP;
            richTextBox1.AllowDrop = Settings.Default.RichCodeADrop;
            richTextBox1.SelectionColor = Settings.Default.RichCodeSeleColor;
            richTextBox1.LineNumberColor = Settings.Default.RichCodeNumColor;
            richTextBox1.BookmarkColor = Settings.Default.RichCodePreakColor;
            //richTextBox1.CurrentLineColor = Settings.Default.RichCodeCurrentLColor;
        }
        public void splashStart() => Application.Run(new SplashScreen(this));


        public void SaveOnExit(FormClosingEventArgs e) /* It will be activated only in Form1_Closing event */
        {
            if (!(File.Exists(path)) && path != string.Empty)
                NeedSave = true;
            string Untitle = (path != string.Empty) ? "as " + Path.GetFileName(path) : "as Untitled?";
            if (NeedSave)
            {
                DialogResult Answare = MessageBox.Show("Do you want to save the changes " + Untitle, AppName, MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);
                //DialogResult Answare = new DialogSave("Do you want to save the changes " + Untitle, AppName).ShowDialog();
                switch (Answare)
                {
                    case DialogResult.Yes:
                        if (!SaveCode())
                            e.Cancel = true;
                        break;
                    case DialogResult.No:
                        //Application.Exit(); /* There is no do to... */
                        break;
                    default:
                        e.Cancel = true;
                        break;
                }
            }
        }

        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string Untitle = (path != string.Empty) ? "as " + Path.GetFileName(path) + ", before open a new file?" : "as Untitled before open a new file?";
            if (NeedSave)
            {
                //DialogResult Answare = MessageBox.Show("Do you want to save the changes " + Untitle, AppName, MessageBoxButtons.YesNoCancel);
                var Answare = new DialogSave("Do you want to save the changes " + Untitle, AppName).ShowDialog(this);
                switch (Answare)
                {
                    case DialogResult.Yes:
                        if (SaveCode())
                            OpenCode();
                        //worker.RunWorkerAsync();
                        break;
                    case DialogResult.No:
                        OpenCode();
                        break;
                    default:
                        break;
                }
            }
            else
                OpenCode();

        }

        private void saveToolStripMenuItem_Click(object sender, EventArgs e) => SaveCode();

        private void exitToolStripMenuItem_Click(object sender, EventArgs e) => Application.Exit();

        private void From1_FormClosing(object sender, FormClosingEventArgs e) => SaveOnExit(e);

        #region Styles
        Style Comment = new TextStyle(Brushes.Gray, null, FontStyle.Italic);
        Style TypesOfProgramm = new TextStyle(Brushes.Blue, null, FontStyle.Bold);
        Style Commants = new TextStyle(Brushes.DarkCyan, null, FontStyle.Regular);
        Style Functions = new TextStyle(Brushes.DarkRed, null, FontStyle.Bold);
        Style Comparativeoperators = new TextStyle(Brushes.BlueViolet, null, FontStyle.Bold);
        Style Logical = new TextStyle(Brushes.Red, null, FontStyle.Bold);
        Style Type = new TextStyle(Brushes.Blue, null, FontStyle.Regular);
        Style logic = new TextStyle(Brushes.Green, null, FontStyle.Regular);
        Style RegText = new TextStyle(Brushes.Brown, null, FontStyle.Regular);
        Style FunctionNameStyle = new TextStyle(Brushes.Blue, null, FontStyle.Regular);
        Style FunctionIF = new TextStyle(Brushes.Crimson, null, FontStyle.Regular);
       // Style FunctionREPEAT= new TextStyle(Brushes.BlueViolet, null, FontStyle.Regular);
        //Style FunctionWHILE = new TextStyle(Brushes.DarkSlateGray, null, FontStyle.Regular);
        Style OUTIN = new TextStyle(Brushes.Chocolate, null, FontStyle.Regular);
        #endregion Styles
        private void richTextBox1_TextChanged(object sender, FastColoredTextBoxNS.TextChangedEventArgs e)
        {
            e.ChangedRange.ClearStyle(Comment);
            e.ChangedRange.ClearStyle(TypesOfProgramm);
            e.ChangedRange.ClearStyle(Commants);
            e.ChangedRange.ClearStyle(Functions);
            e.ChangedRange.ClearStyle(Comparativeoperators);
            e.ChangedRange.ClearStyle(Logical);
            e.ChangedRange.ClearStyle(Type);
            e.ChangedRange.ClearStyle(logic);
            e.ChangedRange.ClearStyle(RegText);
            e.ChangedRange.ClearStyle(FunctionIF);
           // e.ChangedRange.ClearStyle(FunctionREPEAT);
           // e.ChangedRange.ClearStyle(FunctionWHILE);
            e.ChangedRange.ClearStyle(OUTIN);
            e.ChangedRange.ClearFoldingMarkers();
            //comment highlighting
            e.ChangedRange.SetStyle(Comment, @"!.*$", RegexOptions.Multiline);
            e.ChangedRange.SetStyle(TypesOfProgramm, @"\b(ΠΡΟΓΡΑΜΜΑ|ΣΤΑΘΕΡΕΣ|ΜΕΤΑΒΛΗΤΕΣ|ΑΡΧΗ|ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ|ΔΙΑΔΙΚΑΣΙΑ|ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ|ΣΥΝΑΡΤΗΣΗ|ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ|ΕΠΙΛΕΞΕ|ΠΕΡΙΠΤΩΣΗ|ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ)\b");
            e.ChangedRange.SetStyle(Commants, @"\b(ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ|ΜΕΧΡΙΣ_ΟΤΟΥ|ΓΙΑ|ΑΠΟ|ΜΕΧΡΙ|ΜΕ_ΒΗΜΑ|ΚΑΛΕΣΕ|ΟΣΟ|ΕΠΑΝΑΛΑΒΕ|ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ)\b");
            e.ChangedRange.SetStyle(OUTIN, @"\b(ΓΡΑΨΕ|ΔΙΑΒΑΣΕ)\b");
            //e.ChangedRange.SetStyle(FunctionWHILE, @"\b(ΓΙΑ|ΑΠΟ|ΜΕΧΡΙ|ΜΕ_ΒΗΜΑ|ΚΑΛΕΣΕ|ΟΣΟ|ΕΠΑΝΑΛΑΒΕ|ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ)\b");
            //e.ChangedRange.SetStyle(FunctionREPEAT, @"\b(ΟΣΟ|ΕΠΑΝΑΛΑΒΕ|ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ)\b");
            e.ChangedRange.SetStyle(FunctionIF, @"\b(ΑΝ|ΤΟΤΕ|ΤΕΛΟΣ_ΑΝ|ΑΛΛΙΩΣ_ΑΝ|ΑΛΛΙΩΣ)\b");
            e.ChangedRange.SetStyle(Functions, @"\b(Α_Μ(.*?)|Α_Τ(.*?)|Ε(.*?)|ΕΦ(.*?)|ΗΜ(.*?)|ΣΥΝ(.*?)|ΛΟΓ(.*?)|Τ_Ρ(.*?))\b", RegexOptions.Singleline);
            e.ChangedRange.SetStyle(Functions, @"\b('='|'<>'|'<'|'<='|>|>=|^|div|mod)\b");
            e.ChangedRange.SetStyle(Logical, @"\b(Η|ΚΑΙ|ΟΧΙ)\b");
            e.ChangedRange.SetStyle(Type, @"\b(ΑΚΕΡΑΙΕΣ|ΠΡΑΓΜΑΤΙΚΕΣ|ΧΑΡΑΚΤΗΡΕΣ|ΛΟΓΙΚΕΣ|ΑΚΕΡΑΙΑ|ΠΡΑΓΜΑΤΙΚΗ|ΧΑΡΑΚΤΗΡΑΣ|ΛΟΓΙΚΗ)\b");
            e.ChangedRange.SetStyle(logic, @"\b(ΑΛΗΘΗΣ|ΨΕΥΔΗΣ)\b");
            e.ChangedRange.SetStyle(RegText, @"(\'.+?\')");
            e.ChangedRange.SetStyle(RegText, "(\".+?\")");

            /* folder block */
            e.ChangedRange.SetFoldingMarkers("ΑΝ.+?ΤΟΤΕ", "ΤΕΛΟΣ_ΑΝ");
            //e.ChangedRange.SetFoldingMarkers("ΑΛΛΙΩΣ", "ΤΕΛΟΣ_ΑΝ");
            //e.ChangedRange.SetFoldingMarkers("ΑΛΛΙΩΣ_ΑΝ", "ΤΕΛΟΣ_ΑΝ");
            e.ChangedRange.SetFoldingMarkers("ΟΣΟ.+?ΕΠΑΝΑΛΑΒΕ", "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ");
            e.ChangedRange.SetFoldingMarkers("ΓΙΑ.+?ΑΠΟ.+?ΜΕΧΡΙ.+?", "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ");
            e.ChangedRange.SetFoldingMarkers("ΓΙΑ.+?ΑΠΟ.+?ΜΕΧΡΙ.+?ΜΕ_ΒΗΜΑ", "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ");
            //e.ChangedRange.SetFoldingMarkers("ΠΡΟΓΡΑΜΜΑ.+?", "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ");
            e.ChangedRange.SetFoldingMarkers("ΕΠΙΛΕΞΕ.+?", "ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ");
            e.ChangedRange.SetFoldingMarkers("ΔΙΑΔΙΚΑΣΙΑ", "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ");
            e.ChangedRange.SetFoldingMarkers("ΣΥΝΑΡΤΗΣΗ", "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ");

        }

        private void button3_Click(object sender, EventArgs e)
        {
            using (FolderBrowserDialog fbd = new FolderBrowserDialog() { Description = "Select your path. " })
            {
                if (fbd.ShowDialog() == DialogResult.OK)
                {
                    FileBrowser.Url = new Uri(fbd.SelectedPath);
                    tb_Path.Text = fbd.SelectedPath;
                }
            }
        }

        private void newWindowToolStripMenuItem_Click(object sender, EventArgs e)
        {
            SaveSettings();
            System.Diagnostics.Process.Start(ExePath);
        }

        private void saveAsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            SaveFileDialog sv = new SaveFileDialog();
            sv.ShowHelp = true;
            sv.Filter = FileFilter;
            sv.FileName = "Untitled";
            if (sv.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    Cursor = Cursors.WaitCursor;
                    //Thread t = new Thread(new ThreadStart(Loading));
                    //t.Start();
                    File.WriteAllText(path = sv.FileName, richTextBox1.Text);
                    NeedSave = false;
                    //t.Abort();
                    Cursor = Cursors.Default;
                }
                catch (Exception ex)
                {
                    DialogResult anws = MessageBox.Show("Error on trying to save file:\n" + ex.Message, AppName, MessageBoxButtons.RetryCancel, MessageBoxIcon.Error);
                    switch (anws)
                    {
                        case DialogResult.Retry:
                            SaveCode();
                            break;
                        default:
                            break;
                    }
                }

            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (FileBrowser.CanGoBack)
                FileBrowser.GoBack();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (FileBrowser.CanGoForward)
                FileBrowser.GoForward();
        }

        private void findToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.ShowFindDialog();

        private void replaceToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.ShowReplaceDialog();

        private void goToToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.ShowGoToDialog();

        private void selectAllToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectAll();

        private void searchWithBingToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string SearchInBing = richTextBox1.SelectedText;
            System.Diagnostics.Process.Start("https://go.microsoft.com/fwlink/?linkid=873217&q=" + SearchInBing + "&form=NPCTXT");
        }

        private void timeDateToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = DateTime.Now.ToString();

        private void undoToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Undo();

        private void redoToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Redo();

        private void cutToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Cut();

        private void copyToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Copy();

        private void pasteToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Paste();

        private void deleteToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = string.Empty;

        private void fontToolStripMenuItem_Click(object sender, EventArgs e)
        {
            FontDialog fontDialog = new FontDialog();
            fontDialog.ShowApply = true;
            fontDialog.Font = richTextBox1.Font;
            DialogResult answ = fontDialog.ShowDialog();
            switch (answ)
            {
                case DialogResult.Yes:
                    richTextBox1.Font = fontDialog.Font;
                    break;
                case DialogResult.No:
                    break;
                default:
                    richTextBox1.Font = fontDialog.Font;
                    break;
            }
        }

        private void wordWrapToolStripMenuItem_Click(object sender, EventArgs e)
        {
            bool isWrap = richTextBox1.WordWrap;
            switch (isWrap)
            {
                case true:
                    richTextBox1.WordWrap = false;
                    break;
                default:
                    richTextBox1.WordWrap = true;
                    break;
            }

        }

        private void formatToolStripMenuItem_DropDownOpening(object sender, EventArgs e) => wordWrapToolStripMenuItem.Checked = richTextBox1.WordWrap;

        //private void topMostToolStripMenuItem_CheckedChanged(object sender, EventArgs e) => ;

        private void viewToolStripMenuItem_DropDownOpening(object sender, EventArgs e) => topMostToolStripMenuItem.Checked = TopMost;

        private void topMostToolStripMenuItem_Click(object sender, EventArgs e)
        {
            bool isWrap = TopMost;
            switch (isWrap)
            {
                case true:
                    TopMost = false;
                    break;
                default:
                    TopMost = true;
                    break;
            }

        }

        private int CountWords(string words)
        {
            string[] allWords = words.Split(' ');
            return allWords.Length;
        }

        private void newBreakpointToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.BookmarkLine(richTextBox1.Selection.Start.iLine);

        private void removeBreakpointToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.UnbookmarkLine(richTextBox1.Selection.Start.iLine);

        private void wordCountToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string words = richTextBox1.Text.Trim();
            MessageBox.Show(
            "\nWords: " + CountWords(words).ToString() + "\n\nCharacters: " +
            richTextBox1.Text.Length.ToString(), "Word Count", MessageBoxButtons.OK, MessageBoxIcon.None);
        }

        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string Untitle = (path != string.Empty) ? "as " + Path.GetFileName(path) : "as Untitled?";
            if (NeedSave)
            {
                //DialogResult answ = MessageBox.Show("Do you want to save the changes " + Untitle, AppName, MessageBoxButtons.YesNoCancel);
                var answ = new DialogSave("Do you want to save the changes " + Untitle, AppName).ShowDialog(this);
                switch (answ)
                {
                    case DialogResult.Yes:
                        if (SaveCode())
                        {
                            richTextBox1.Text = string.Empty;
                            richTextBox1.Clear();
                            richTextBox1.ClearHints();
                            NeedSave = false;
                            path = string.Empty;
                            Text = AppName;
                        }
                        break;
                    case DialogResult.No:
                        richTextBox1.Text = string.Empty;
                        richTextBox1.Clear();
                        richTextBox1.ClearHints();
                        NeedSave = false;
                        path = string.Empty;
                        Text = AppName;
                        break;
                    default:
                        break;
                }
            }
            else
            {
                richTextBox1.Text = string.Empty;
                richTextBox1.Clear();
                richTextBox1.ClearHints();
                NeedSave = false;
                path = string.Empty;
                Text = AppName;
            }

        }

        private void pageSetupToolStripMenuItem_Click(object sender, EventArgs e) => pageSetupDialog1.ShowDialog();

        private void printToolStripMenuItem_Click(object sender, EventArgs e)
        {
            richTextBox1.Print(new PrintDialogSettings() { ShowPrintPreviewDialog = true });
        }

        private void printDocument1_PrintPage(object sender, System.Drawing.Printing.PrintPageEventArgs e)
        {
            Font font = richTextBox1.Font;
            e.Graphics.DrawString(richTextBox1.Text, font, Brushes.Black,
    new PointF(100, 100));
        }

        private void editToolStripMenuItem_DropDownOpening(object sender, EventArgs e)
        {
            bool IsSel = (richTextBox1.SelectedText != string.Empty) ? true : false;
            bool IsEmpty = (richTextBox1.Text != string.Empty) ? true : false;
            /* Main Menu Strip */
            cutToolStripMenuItem.Enabled = IsSel;
            copyToolStripMenuItem.Enabled = IsSel;
            deleteToolStripMenuItem.Enabled = IsSel;
            searchWithBingToolStripMenuItem.Enabled = IsSel;
            CollapseToolStripMenuItem.Enabled = IsSel;
            commentSelectedToolStripMenuItem.Enabled = IsEmpty;
            findToolStripMenuItem.Enabled = IsEmpty;
            replaceToolStripMenuItem.Enabled = IsEmpty;
            goToToolStripMenuItem.Enabled = IsEmpty;
            selectAllToolStripMenuItem.Enabled = IsEmpty;
        }

        private void From1_FormClosed(object sender, FormClosedEventArgs e) => SaveSettings();

        private void backgroundColorToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.Color = richTextBox1.BackColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
                richTextBox1.BackColor = colorDialog.Color;
        }

        private void From1_Load(object sender, EventArgs e) => LoadSettings();

        private void aboutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            About_Form about_Form = new About_Form(this);
            about_Form.ShowDialog(this);
        }

        private void treeView1_NodeMouseDoubleClick(object sender, TreeNodeMouseClickEventArgs e)
        {
            string swe = treeView1.SelectedNode.Text;
            richTextBox1.SelectedText = swe + "\n";
        }

        private void contextMenuStrip1_Opening(object sender, System.ComponentModel.CancelEventArgs e)
        {
            bool IsSel = (richTextBox1.SelectedText != string.Empty) ? true : false;
            bool IsEmpty = (richTextBox1.Text != string.Empty) ? true : false;
            cutToolStripMenuItem1.Enabled = IsSel;
            copyToolStripMenuItem1.Enabled = IsSel;
            deleteToolStripMenuItem1.Enabled = IsSel;
            collapseSelectedBlockToolStripMenuItem.Enabled = IsSel;
            commentToolStripMenuItem.Enabled = IsEmpty;
            searchToolStripMenuItem.Enabled = IsEmpty;
            selectAllToolStripMenuItem1.Enabled = IsEmpty;
            searchWithBingToolStripMenuItem1.Enabled = IsSel;
        }

        private void stepOverToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.GotoNextBookmark(richTextBox1.Selection.Start.iLine);

        private void stepIntoToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.GotoPrevBookmark(richTextBox1.Selection.Start.iLine);

        private Regex regex = new Regex(@"&&|&");
        private void richTextBox1_WordWrapNeeded(object sender, WordWrapNeededEventArgs e)
        {
            //var max = (richTextBox1.ClientSize.Width - richTextBox1.LeftIndent)/richTextBox1.CharWidth;
            //FastColoredTextBox.CalcCutOffs(e.CutOffPositions, max, max, e.ImeAllowed, true, e.Line);

            e.CutOffPositions.Clear();
            foreach (Match m in regex.Matches(e.Line.Text))
                e.CutOffPositions.Add(m.Index);
        }
        #region NoteText
        //Shortcut style
        ShortcutStyle shortCutStyle = new ShortcutStyle(Pens.Maroon);
        //Marker styles
        MarkerStyle YellowStyle = new MarkerStyle(new SolidBrush(Color.FromArgb(180, Color.Yellow)));
        MarkerStyle RedStyle = new MarkerStyle(new SolidBrush(Color.FromArgb(180, Color.Red)));
        MarkerStyle GreenStyle = new MarkerStyle(new SolidBrush(Color.FromArgb(180, Color.Green)));
        MarkerStyle BlueStyle = new MarkerStyle(new SolidBrush(Color.FromArgb(180, Color.Blue)));
        #endregion NoteText
        private void BuildBackBrush()
        {
            richTextBox1.BackBrush = new LinearGradientBrush(richTextBox1.ClientRectangle, Color.White, Color.Silver,
                                                     LinearGradientMode.Vertical);
        }


        private static readonly MarkerStyle SameWordsStyle = new MarkerStyle(new SolidBrush(Color.FromArgb(60, Color.Gray)));
        private void richTextBox1_SelectionChangedDelayed(object sender, EventArgs e)
        {
            lbl_Line.Text = (richTextBox1.Selection.FromLine + 1).ToString();
            lbl_Selection.Text = richTextBox1.Selection.Length.ToString();

            //here we draw shortcut for selection area
            Range selection = richTextBox1.Selection;
            //clear previous shortcuts
            richTextBox1.VisibleRange.ClearStyle(shortCutStyle);
            //Highlight same words
            if (!selection.IsEmpty)//user selected one or more chars?
            {
                //find last char
                var r = selection.Clone();
                r.Normalize();
                r.Start = r.End;//go to last char
                r.GoLeft(true);//select last char
                //apply ShortCutStyle
                r.SetStyle(shortCutStyle);
            }
            richTextBox1.VisibleRange.ClearStyle(SameWordsStyle);
            if (!richTextBox1.Selection.IsEmpty)
                return;//user selected diapason

            //get fragment around caret
            var fragment = richTextBox1.Selection.GetFragment(@"\w");
            string text = fragment.Text;
            if (text.Length == 0)
                return;
            //highlight same words
            var ranges = richTextBox1.VisibleRange.GetRanges("\\b" + text + "\\b").ToArray();
            if (ranges.Length > 1)
                foreach (var r in ranges)
                    r.SetStyle(SameWordsStyle);
        }
        private void TrimSelection()
        {
            var sel = richTextBox1.Selection;

            //trim left
            sel.Normalize();
            while (char.IsWhiteSpace(sel.CharAfterStart) && sel.Start < sel.End)
                sel.GoRight(true);
            //trim right
            sel.Inverse();
            while (char.IsWhiteSpace(sel.CharBeforeStart) && sel.Start > sel.End)
                sel.GoLeft(true);
        }

        private void richTextBox1_VisualMarkerClick(object sender, VisualMarkerEventArgs e)
        {
            if (e.Style == shortCutStyle)
            {
                //show popup menu
                cmMark.Show(richTextBox1.PointToScreen(e.Location));
            }
        }

        private void markAsYellowToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TrimSelection();
            //set background style
            switch ((string)((sender as ToolStripMenuItem).Tag))
            {
                case "yellow": richTextBox1.Selection.SetStyle(YellowStyle); break;
                case "red": richTextBox1.Selection.SetStyle(RedStyle); break;
                case "green": richTextBox1.Selection.SetStyle(GreenStyle); break;
                case "blue": richTextBox1.Selection.SetStyle(BlueStyle); break;
                case "lineBackground": richTextBox1[richTextBox1.Selection.Start.iLine].BackgroundBrush = Brushes.Pink; break;
            }
            //clear shortcut style
            richTextBox1.Selection.ClearStyle(shortCutStyle);
        }

        private void cleanMarkedToolStripMenuItem_Click(object sender, EventArgs e)
        {
            richTextBox1.Selection.ClearStyle(YellowStyle, RedStyle, GreenStyle, BlueStyle);
            richTextBox1[richTextBox1.Selection.Start.iLine].BackgroundBrush = null;
        }

        //private void richTextBox1_Resize(object sender, EventArgs e) => BuildBackBrush();

        public bool SaveCode()
        {
            if (path != string.Empty)
            {
                Cursor = Cursors.WaitCursor;
                //Thread t = new Thread(new ThreadStart(Loading));
                //t.Start();
                File.WriteAllText(path, richTextBox1.Text);
                NeedSave = false;
                Cursor = Cursors.Default;
                //t.Abort();
                Text = Path.GetFileName(path) + " - " + AppName;
                return true;
            }
            else
            {
                SaveFileDialog sv = new SaveFileDialog();
                sv.ShowHelp = true;
                sv.Filter = FileFilter;
                sv.FileName = "Untitled";
                if (sv.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        Cursor = Cursors.WaitCursor;
                        //Thread t = new Thread(new ThreadStart(Loading));
                        //t.Start();
                        File.WriteAllText(path = sv.FileName, richTextBox1.Text);
                        NeedSave = false;
                        Cursor = Cursors.Default;
                        //t.Abort();
                        Text = Path.GetFileName(path) + " - " + AppName;
                        return true;
                    }
                    catch (Exception ex)
                    {
                        DialogResult anws = MessageBox.Show(ex.Message, AppName, MessageBoxButtons.RetryCancel, MessageBoxIcon.Error);
                        switch (anws)
                        {
                            case DialogResult.Retry:
                                SaveCode();
                                break;
                            default:
                                break;
                        }
                        return false;
                    }
                }
                else
                    return false;
            }

        }

        public void Loading() => Application.Run(new LoadingF());

        public void OpenCode()
        {
            try
            {
                OpenFileDialog op = new OpenFileDialog();
                op.ShowHelp = true;
                op.Filter = FileFilter;
                if (op.ShowDialog() == DialogResult.OK)
                {
                    Cursor = Cursors.WaitCursor;
                    //Thread t = new Thread(new ThreadStart(Loading));
                    //t.Start();
                    var sr = new StreamReader(op.FileName);
                    richTextBox1.Text = sr.ReadToEnd();
                    //Text = op.FileName;
                    NeedSave = false;
                    path = op.FileName;
                    Cursor = Cursors.Default;
                    sr.Close();
                    //t.Abort();
                    Text = Path.GetFileName(path) + " - " + AppName;
                    //AssociateFileExtention(path);
                }
                //this.Text = op.FileName;
            }
            catch
            {
                Cursor = Cursors.Default;
                MessageBox.Show("Is not the right kind of document!", AppName, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }


        private void optionsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Options_Form options_Form = new Options_Form(this);
            // prevend to opening more than 1 
            bool IsOpen = false;
            foreach (Form f in Application.OpenForms)
            {
                if (f.Text == "Options" || f.Text == "Επιλογές")
                {
                    IsOpen = true;
                    f.BringToFront();
                    break;
                }
            }
            if (IsOpen == false)
                options_Form.Show(this);

            //Options_Form options_Form = new Options_Form(this);
            //options_Form.Show(this);
        }

        private void registerProductToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Options_Form options_Form = new Options_Form(this);
            options_Form.Show(this);
        }


        #region Menu Insert
        private void toolStripMenuItem2_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "<-";

        private void γΡΑΨΕToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΓΡΑΨΕ";

        private void δΙΑΒΑΣΕToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΔΙΑΒΑΣΕ";

        private void αΝΤΟΤΕΤΕΛΟΣΑΝToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΑΝ  ΤΟΤΕ\nΤΕΛΟΣ_ΑΝ";

        private void αΛΛΙΩΣΑΝΤΟΤΕToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΑΛΛΙΩΣ_ΑΝ   ΤΟΤΕ";

        private void αΛΛΙΩΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΑΛΛΙΩΣ";

        private void οΣΟΕΠΑΝΕΛΑΒΕΤΕΛΟΣΕΠΑΝΑΛΗΨΗΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΟΣΟ  ΕΠΑΝΑΛΑΒΕ\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ";

        private void αΡΧΗΕΠΑΝΑΛΗΨΗΣΜΕΧΡΙΣΟΤΟΥToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ\n\nΜΕΧΡΙΣ_ΟΤΟΥ";

        private void γΙΑΑΠΟΜΕΧΡΙΤΕΛΟΣΕΠΑΝΑΛΗΨΗΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΓΙΑ   ΑΠΟ  ΜΕΧΡΙ\n\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ";

        private void μΕΒΗΜΑToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΜΕ_ΒΗΜΑ";

        private void κΑΛΕΣΕToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΚΑΛΕΣΕ";

        private void πΡΟΓΡΑΜΜΑToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΠΡΟΓΡΑΜΜΑ";

        private void σΤΑΘΕΡΕΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΣΤΑΘΕΡΕΣ\n  =";

        private void μΕΤΑΒΛΗΤΕΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΜΕΤΑΒΛΗΤΕΣ\n";

        private void αΡΧΗToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΑΡΧΗ\n";

        private void τΕΛΟΣΠΡΟΓΡΑΜΜΑΤΟΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ";

        private void δΙΑΔΙΚΑΣΙΑToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΔΙΑΔΙΚΑΣΙΑ";

        private void τΕΛΟΣΔΙΑΔΙΚΑΣΙΑΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ";

        private void σΥΝΑΡΤΗΣΗToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΣΥΝΑΡΤΗΣΗ";

        private void τΕΛΟΣΣΥΝΑΡΤΗΣΗΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ";

        private void αΜToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "Α_Μ()";

        private void αΤToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "Α_Τ()";

        private void εToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "Ε()";

        private void εΦToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΕΦ()";

        private void ηΜToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΗΜ()";

        private void σΥΝToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΣΥΝ()";

        private void λΟΓToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΛΟΓ()";

        private void τΡToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "Τ_Ρ()";

        private void divToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "div";

        private void modToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "mod";

        private void αΚΕΡΑΙΕΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΑΚΕΡΑΙΕΣ:";

        private void πΡΑΓΜΑΤΙΚΕΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΠΡΑΓΜΑΤΙΚΕΣ:";

        private void χΑΡΑΚΤΗΡΕΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΧΑΡΑΚΤΗΡΕΣ:";

        private void λΟΓΙΚΕΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = "ΛΟΓΙΚΕΣ:";

        private void αΚΕΡΑΙΑToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = ":ΑΚΕΡΑΙΑ";

        private void πΡΑΓΜΑΤΙΚΗToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = ":ΠΡΑΓΜΑΤΙΚΗ";

        private void χΑΡΑΚΤΗΡΑΣToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = ":ΧΑΡΑΚΤΗΡΑΣ";

        private void λΟΓΙΚΗToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.SelectedText = ":ΛΟΓΙΚΗ";
        #endregion Menu Insert

        private void viewHelpToolStripMenuItem_Click(object sender, EventArgs e)
        {
            bool isExist = File.Exists("Help.pdf");
            if (isExist)
                System.Diagnostics.Process.Start("Help.pdf");
            else
                System.Diagnostics.Process.Start("https://github.com/bill-chamal/Glossa/blob/master/Help.pdf");
            //Help_Form help_Form = new Help_Form();
            //help_Form.ShowDialog(this);
        }

        private void commentSelectedLinesToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.InsertLinePrefix(richTextBox1.CommentPrefix);

        private void uncommentSelectedLinesToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.RemoveLinePrefix(richTextBox1.CommentPrefix);

        private void CollapseToolStripMenuItem_Click(object sender, EventArgs e)
        {
            richTextBox1.CollapseBlock(richTextBox1.Selection.Start.iLine, richTextBox1.Selection.End.iLine);
        }

        private void startStopMacroRecordingCtrlMToolStripMenuItem_Click(object sender, EventArgs e)
        {
            richTextBox1.MacrosManager.IsRecording = !richTextBox1.MacrosManager.IsRecording;
        }

        private void executeMacroToolStripMenuItem_Click(object sender, EventArgs e)
        {
            richTextBox1.MacrosManager.ExecuteMacros();
        }

        private void setSelectedAsReadonlyToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Selection.ReadOnly = true;

        private void setSelectedAsWritableToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Selection.ReadOnly = false;

        private void increaseIndentTabToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.IncreaseIndent();

        private void decreaseIndentShiftTabToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.DecreaseIndent();

        private void goBackwardCtrlToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.NavigateBackward();

        private void goForwardCtrlShiftToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.NavigateForward();

        private void autoIndentSelectedTextToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.DoAutoIndent();

        private void codeToolStripMenuItem_DropDownOpening(object sender, EventArgs e)
        {
            bool IsSel = (richTextBox1.SelectedText != string.Empty) ? true : false;
            bool IsEmpty = (richTextBox1.Text != string.Empty) ? true : false;
            setSelectedAsReadonlyToolStripMenuItem.Enabled = IsSel;
            setSelectedAsWritableToolStripMenuItem.Enabled = IsSel;
            collapseSelectedBlockToolStripMenuItem1.Enabled = IsSel;
            decreaseIndentShiftTabToolStripMenuItem.Enabled = IsEmpty;
            increaseIndentTabToolStripMenuItem.Enabled = IsEmpty;
            autoIndentSelectedTextToolStripMenuItem.Enabled = IsSel;
            goForwardCtrlShiftToolStripMenuItem.Enabled = IsEmpty;
            goBackwardCtrlToolStripMenuItem.Enabled = IsEmpty;
        }

        private void checkForUpdatesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://drive.google.com/file/d/10JgDGG4J_VbEJTzq4B_9jwSseKVXozJC/view?usp=sharing");
        }

        private void fileToolStripMenuItem_DropDownOpening(object sender, EventArgs e)
        {
            saveToolStripMenuItem.Enabled = NeedSave;
            printToolStripMenuItem.Enabled = (richTextBox1.Text == string.Empty) ? false : true;
            filePropertiesToolStripMenuItem.Enabled = (path == string.Empty) ? false : true;
        }

        private void reportAProblemToolStripMenuItem_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://github.com/bill-chamal/Glossa/issues");
        }

        private void suggestAFeatchureToolStripMenuItem_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://github.com/bill-chamal/Glossa/pulls");
        }

        #region Zoom
        private void zoomInToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Zoom += 25;

        private void zoomOutToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Zoom -= 25;

        private void restoreZoomToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.Zoom = 100;

        private void toolStripMenuItem14_Click(object sender, EventArgs e) => richTextBox1.Zoom = 25;

        private void toolStripMenuItem15_Click(object sender, EventArgs e) => richTextBox1.Zoom = 50;

        private void toolStripMenuItem16_Click(object sender, EventArgs e) => richTextBox1.Zoom = 100;

        private void toolStripMenuItem17_Click(object sender, EventArgs e) => richTextBox1.Zoom = 125;

        private void toolStripMenuItem18_Click(object sender, EventArgs e) => richTextBox1.Zoom = 150;

        private void toolStripMenuItem19_Click(object sender, EventArgs e) => richTextBox1.Zoom = 200;

        private void toolStripMenuItem20_Click(object sender, EventArgs e) => richTextBox1.Zoom = 300;
        #endregion Zoom

        private void richTextBox1_TextChanging(object sender, TextChangingEventArgs e)
        {
            NeedSave = true;
            if (path == string.Empty)
                Text = "Untitled - " + AppName;
            else
                Text = Path.GetFileName(path) + "* - " + AppName;
        }

        private void macroToolStripMenuItem_DropDownOpening(object sender, EventArgs e)
        {
            executeMacroToolStripMenuItem.Enabled = !(richTextBox1.MacrosManager.MacroIsEmpty);
            clearMacroToolStripMenuItem.Enabled = !(richTextBox1.MacrosManager.MacroIsEmpty);
        }

        private void clearMacroToolStripMenuItem_Click(object sender, EventArgs e) => richTextBox1.MacrosManager.ClearMacros();

        #region Open File Properties
        [DllImport("shell32.dll", CharSet = CharSet.Auto)]
        static extern bool ShellExecuteEx(ref SHELLEXECUTEINFO lpExecInfo);
        [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Auto)]

        public struct SHELLEXECUTEINFO
        {
            public int cbSize;
            public uint fMask;
            public IntPtr hwnd;
            [MarshalAs(UnmanagedType.LPTStr)]
            public string lpVerb;
            [MarshalAs(UnmanagedType.LPTStr)]
            public string lpFile;
            [MarshalAs(UnmanagedType.LPTStr)]
            public string lpParameters;
            [MarshalAs(UnmanagedType.LPTStr)]
            public string lpDirectory;
            public int nShow;
            public IntPtr hInstApp;
            public IntPtr lpIDList;
            [MarshalAs(UnmanagedType.LPTStr)]
            public string lpClass;
            public IntPtr hkeyClass;
            public uint dwHotKey;
            public IntPtr hIcon;
            public IntPtr hProcess;
        }

        private const int SW_SHOW = 5;
        private const uint SEE_MASK_INVOKEIDLIST = 12;
        public static bool ShowFileProperties(string Filename)
        {
            SHELLEXECUTEINFO info = new SHELLEXECUTEINFO();
            info.cbSize = System.Runtime.InteropServices.Marshal.SizeOf(info);
            info.lpVerb = "properties";
            info.lpFile = Filename;
            info.nShow = SW_SHOW;
            info.fMask = SEE_MASK_INVOKEIDLIST;
            return ShellExecuteEx(ref info);
        }

        private void filePropertiesToolStripMenuItem_Click(object sender, EventArgs e) => ShowFileProperties(path);
        #endregion Open File Properties

        private void AssociateFileExtention(string pathex)
        {
            string ext = Path.GetExtension(pathex);

            switch(ext)
            {
                case ".gl":
                    richTextBox1.Language = Language.Custom;
                    break;
                case ".psc":
                    richTextBox1.Language = Language.Custom;
                    break;
                case ".glo":
                    richTextBox1.Language = Language.Custom;
                    break;
                case ".psg":
                    richTextBox1.Language = Language.Custom;
                    break;
                case ".cs":
                    richTextBox1.Language = Language.CSharp;
                    break;
                case ".vb":
                    richTextBox1.Language = Language.VB;
                    break;
                case ".html":
                    richTextBox1.Language = Language.HTML;
                    break;
                case ".xml":
                    richTextBox1.Language = Language.XML;
                    break;
                case ".sql":
                    richTextBox1.Language = Language.SQL;
                    break;
                case ".php":
                    richTextBox1.Language = Language.PHP;
                    break;
                case ".js":
                    richTextBox1.Language = Language.JS;
                    break;

                default:
                    richTextBox1.Language = Language.Custom;
                    break;
            }
        }
    }
}
