using FastColoredTextBoxNS;
using GLOSSA.Properties;
using System;
using System.Drawing;
using System.Threading;
using System.Windows.Forms;

namespace GLOSSA
{
    public partial class Options_Form : Form
    {
        #region Starter
        public Options_Form()
        {
            Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo(Settings.Default.Language);
            InitializeComponent();
        }
        private Form1 mainForm = null;
        public Options_Form(Form callingForm)
        {
            mainForm = callingForm as Form1;
            InitializeComponent();
        }
        #endregion Starter

        Uri FileWorkPath;
        Font TreeFont, AppFont;
        Color RichSelColor, RichBackColor, RichLineNumColor, RichBreaColor, RichCurLineColor;
        int check_cb;

        void InitializeContect()
        {
            string path = mainForm.FileBrowser.Url.ToString();
            tb_Path.Text = path;

            FileWorkPath = mainForm.FileBrowser.Url;
            ck_TopMost.Checked = mainForm.TopMost;
            TreeFont = mainForm.treeView1.Font;
            AppFont = mainForm.Font;
            ck_WordWrap.Checked = mainForm.richTextBox1.WordWrap;
            ck_VCP.Checked = mainForm.richTextBox1.VirtualSpace;
            ck_ADrop.Checked = mainForm.richTextBox1.AllowDrop;
            RichSelColor = mainForm.richTextBox1.SelectionColor;
            RichBackColor = mainForm.richTextBox1.BackColor;
            RichLineNumColor = mainForm.richTextBox1.LineNumberColor;
            RichBreaColor = mainForm.richTextBox1.BookmarkColor;
            RichCurLineColor = mainForm.richTextBox1.CurrentLineColor;

            switch (Thread.CurrentThread.CurrentUICulture.IetfLanguageTag)
            {
                case "en-US":
                    cb_Lng.SelectedIndex = 0;
                    break;
                case "el-GR":
                    cb_Lng.SelectedIndex = 1;
                    break;
                default:
                    cb_Lng.SelectedIndex = 0;
                    break;
            }
            check_cb = cb_Lng.SelectedIndex;
        }

        void Apply()
        {
            mainForm.FileBrowser.Url = FileWorkPath;
            mainForm.TopMost = ck_TopMost.Checked;
            mainForm.treeView1.Font = TreeFont;
            mainForm.Font = AppFont;
            mainForm.richTextBox1.WordWrap = ck_WordWrap.Checked;
            mainForm.richTextBox1.VirtualSpace = ck_VCP.Checked;
            mainForm.richTextBox1.AllowDrop = ck_ADrop.Checked;
            mainForm.richTextBox1.SelectionColor = RichSelColor;
            mainForm.richTextBox1.BackColor = RichBackColor;
            mainForm.richTextBox1.LineNumberColor = RichLineNumColor;
            mainForm.richTextBox1.BookmarkColor = RichBreaColor;
            mainForm.richTextBox1.CurrentLineColor = RichCurLineColor;

            if (cb_Lng.SelectedIndex != check_cb)
            {
                switch (cb_Lng.SelectedIndex)
                {
                    case 0:
                        Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo("en-US");
                        Settings.Default.Language = "en-US";
                        break;
                    case 1:
                        Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo("el-GR");
                        Settings.Default.Language = "el-GR";
                        break;
                    default:
                        break;
                }

                //mainForm.Controls.Clear();
                //mainForm.InitializeComponent(); //Initialize creates an loop when the file needs save
                this.Controls.Clear();
                this.InitializeComponent();
                mainForm.FileBrowser.Url = FileWorkPath;
                tb_Path.Text = FileWorkPath.ToString();

                DialogResult Answare = MessageBox.Show("Do you want to restart the app in order to change the language?\n*You may be prompted to save the changes!", "Restart Glossa", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                //DialogResult Answare = new DialogSave("Do you want to save the changes " + Untitle, AppName).ShowDialog();
                switch (Answare)
                {
                    case DialogResult.Yes:
                        Application.Restart();
                        break;
                    case DialogResult.No:
                        break;
                    default:
                        break;
                }

            }
            //this.Controls.Clear();
            //mainForm.Controls.Clear();
            //InitializeComponent();
            //mainForm.InitializeComponent();

        }

        #region Buttons
        private void btn_Apply_Click(object sender, EventArgs e) => Apply();
        private void btn_ApplyClose_Click(object sender, EventArgs e)
        {
            Apply();
            this.Close();
        }

        private void btn_Canc_Click(object sender, EventArgs e) => this.Close();

        private void button1_Click(object sender, EventArgs e)
        {
            using (FolderBrowserDialog fbd = new FolderBrowserDialog() { Description = "Select your path. " })
            {
                if (fbd.ShowDialog() == DialogResult.OK)
                {
                    FileWorkPath = new Uri(fbd.SelectedPath);
                    tb_Path.Text = fbd.SelectedPath;
                }
            }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            FontDialog fontDialog = new FontDialog();
            fontDialog.Font = mainForm.treeView1.Font;
            if (fontDialog.ShowDialog() == DialogResult.OK)
            {
                TreeFont = fontDialog.Font;
            }
        }

        private void linkLabel2_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            FontDialog fontDialog = new FontDialog();
            fontDialog.Font = mainForm.Font;
            if (fontDialog.ShowDialog() == DialogResult.OK)
            {
                AppFont = fontDialog.Font;
            }
        }

        private void linkLabel7_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.Color = mainForm.richTextBox1.CurrentLineColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
            {
                RichCurLineColor = colorDialog.Color;
            }
        }

        private void linkLabel8_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            var form = new HotkeysEditorForm(mainForm.richTextBox1.HotkeysMapping);
            if (form.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                mainForm.richTextBox1.HotkeysMapping = form.GetHotkeys();

        }

        private void linkLabel3_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.Color = mainForm.richTextBox1.SelectionColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
            {
                RichSelColor = colorDialog.Color;
            }
        }

        private void linkLabel6_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.Color = mainForm.richTextBox1.BookmarkColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
            {
                RichBreaColor = colorDialog.Color;
            }
        }

        private void linkLabel5_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.Color = mainForm.richTextBox1.LineNumberColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
            {
                RichLineNumColor = colorDialog.Color;
            }
        }

        private void linkLabel4_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            ColorDialog colorDialog = new ColorDialog();
            colorDialog.Color = mainForm.richTextBox1.BackColor;
            if (colorDialog.ShowDialog() == DialogResult.OK)
            {
                RichBackColor = colorDialog.Color;
            }
        }

        private void Options_Form_Load(object sender, EventArgs e) => InitializeContect();
        #endregion Buttons
    }
}
