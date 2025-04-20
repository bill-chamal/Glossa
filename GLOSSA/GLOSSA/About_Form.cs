using GLOSSA.Properties;
using System;
using System.Drawing;
using System.Threading;
using System.Windows.Forms;

namespace GLOSSA
{
    public partial class About_Form : Form
    {
        public About_Form()
        {
            InitializeComponent();
        }

        private Form1 mainForm = null;
        public About_Form(Form callingForm)
        {
            mainForm = callingForm as Form1;
            Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo(Settings.Default.Language);
            InitializeComponent();
        }


        private void About_Form_Load(object sender, EventArgs e)
        {
            textBox1.Text = "\nApplication's Executable Path: " + Application.ExecutablePath;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("C:\\WINDOWS\\system32\\msinfo32.exe");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://github.com/bill-chamal/Glossa.git");
        }

        private void button1_MouseEnter(object sender, EventArgs e) => button1.ForeColor = Color.DarkBlue;

        private void button1_MouseLeave(object sender, EventArgs e) => button1.ForeColor = Color.Black;

        private void button2_MouseEnter(object sender, EventArgs e) => button2.ForeColor = Color.DarkGreen;

        private void button2_MouseLeave(object sender, EventArgs e) => button2.ForeColor = Color.Black;

        private void button3_MouseEnter(object sender, EventArgs e) => button3.ForeColor = Color.DarkKhaki;

        private void button3_MouseLeave(object sender, EventArgs e) => button3.ForeColor = Color.Black;
    }
}
