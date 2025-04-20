using System;
using System.Drawing;
using System.Windows.Forms;

namespace GLOSSA
{
    public partial class SplashScreen : Form
    {
        private const int CsDropShadow = 0x00020000;

        int mov;
        int movX;
        int movY;

        public SplashScreen()
        {
            InitializeComponent();
        }

        protected override CreateParams CreateParams
        {
            get
            {
                CreateParams cp = base.CreateParams;
                cp.ClassStyle = CsDropShadow;
                return cp;
            }
        }

        int count = 0, len = 0;
        string txt;
        private Form1 mainForm = null;
        public SplashScreen(Form callingForm)
        {
            mainForm = callingForm as Form1;
            InitializeComponent();
        }

        private void SplashScreen_Load(object sender, EventArgs e)
        {
            txt = lbl_St.Text;
            len = txt.Length;
            lbl_St.Text = "";
            timer1.Start();
        }

        private void SplashScreen_FormClosed(object sender, FormClosedEventArgs e) => timer1.Stop();

        private void label4_MouseEnter(object sender, EventArgs e)
        {
            label4.ForeColor = Color.Black;
        }

        private void label4_MouseLeave(object sender, EventArgs e)
        {
            label4.ForeColor = Color.Silver;
        }

        private void label4_Click(object sender, EventArgs e)
        {
            //Application.Exit();
            Close();
        }

        private void SplashScreen_MouseMove(object sender, MouseEventArgs e)
        {
            if (mov == 1)
            {
                this.SetDesktopLocation(MousePosition.X - movX, MousePosition.Y - movY);
            }
        }

        private void SplashScreen_MouseDown(object sender, MouseEventArgs e)
        {
            mov = 1;
            movX = e.X;
            movY = e.Y;
        }

        private void SplashScreen_MouseUp(object sender, MouseEventArgs e) => mov = 0;

        private void timer1_Tick(object sender, EventArgs e)
        {
            count++;
            if (count > len)
            {
                count = 0;
                lbl_St.Text = "";
            }
            else
            {
                lbl_St.Text = txt.Substring(0, count);

            }

        }
    }
}
