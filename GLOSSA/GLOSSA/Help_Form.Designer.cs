namespace GLOSSA
{
    partial class Help_Form
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Help_Form));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.fctb = new FastColoredTextBoxNS.FastColoredTextBox();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.fctb)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Dock = System.Windows.Forms.DockStyle.Left;
            this.pictureBox1.Image = global::GLOSSA.Properties.Resources.Glossa_Splash;
            this.pictureBox1.Location = new System.Drawing.Point(0, 0);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(151, 256);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.Help_Form_Click);
            // 
            // fctb
            // 
            this.fctb.AcceptsReturn = false;
            this.fctb.AcceptsTab = false;
            this.fctb.AllowMacroRecording = false;
            this.fctb.AutoCompleteBracketsList = new char[] {
        '(',
        ')',
        '{',
        '}',
        '[',
        ']',
        '\"',
        '\"',
        '\'',
        '\''};
            this.fctb.AutoIndent = false;
            this.fctb.AutoIndentChars = false;
            this.fctb.AutoIndentExistingLines = false;
            this.fctb.AutoScrollMinSize = new System.Drawing.Size(0, 226);
            this.fctb.BackBrush = null;
            this.fctb.CaretBlinking = false;
            this.fctb.CharHeight = 24;
            this.fctb.CharWidth = 13;
            this.fctb.Cursor = System.Windows.Forms.Cursors.Arrow;
            this.fctb.DisabledColor = System.Drawing.Color.FromArgb(((int)(((byte)(100)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))));
            this.fctb.Font = new System.Drawing.Font("Courier New", 13.2F);
            this.fctb.IsReplaceMode = false;
            this.fctb.Location = new System.Drawing.Point(157, 12);
            this.fctb.Name = "fctb";
            this.fctb.Paddings = new System.Windows.Forms.Padding(5);
            this.fctb.ReadOnly = true;
            this.fctb.SelectionColor = System.Drawing.Color.Empty;
            this.fctb.ServiceColors = ((FastColoredTextBoxNS.ServiceColors)(resources.GetObject("fctb.ServiceColors")));
            this.fctb.ShowCaretWhenInactive = true;
            this.fctb.ShowFoldingLines = true;
            this.fctb.ShowLineNumbers = false;
            this.fctb.ShowScrollBars = false;
            this.fctb.Size = new System.Drawing.Size(310, 232);
            this.fctb.TabIndex = 1;
            this.fctb.Text = "You don\'t need any help!\r\nYou can trust me...\r\n\r\nHappy coding...\r\n\r\n\r\nThanks for " +
    "using my app!!";
            this.fctb.WordWrap = true;
            this.fctb.Zoom = 100;
            this.fctb.Click += new System.EventHandler(this.Help_Form_Click);
            // 
            // timer1
            // 
            this.timer1.Interval = 50;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // Help_Form
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(120F, 120F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(479, 256);
            this.Controls.Add(this.fctb);
            this.Controls.Add(this.pictureBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Help_Form";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "Help";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.Help_Form_FormClosed);
            this.Click += new System.EventHandler(this.Help_Form_Click);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.fctb)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private FastColoredTextBoxNS.FastColoredTextBox fctb;
        private System.Windows.Forms.Timer timer1;
    }
}