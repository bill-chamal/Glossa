using System;
using System.Drawing;
using System.Threading;
using System.Windows.Forms;

namespace GLOSSA
{
    public partial class LoadingF : Form
    {
        public LoadingF()
        {
            Thread.Sleep(1500);
            this.CenterToParent();
            if (Owner != null)
                Location = new Point(Owner.Location.X + Owner.Width / 2 - Width / 2,
                    Owner.Location.Y + Owner.Height / 2 - Height / 2);

            InitializeComponent();

            timer1.Start();
        }

        private Form1 mainForm = null;
        public LoadingF(Form callingForm)
        {
            mainForm = callingForm as Form1;
            InitializeComponent();
        }

        int incre = 0;
        private void timer1_Tick(object sender, EventArgs e)
        {
            int width = 20;
            int gap = 1;
            Graphics g = progressBar1.CreateGraphics();
            g.Clear(progressBar1.BackColor);
            SolidBrush blueBrush = new SolidBrush(Color.DarkBlue);
            g.FillRectangle(blueBrush, new Rectangle(new Point(incre, 0), new Size(width, progressBar1.Height - 1)));
            g.FillRectangle(blueBrush, new Rectangle(new Point(incre + width + gap, 0), new Size(width, progressBar1.Height - 1)));
            g.FillRectangle(blueBrush, new Rectangle(new Point(incre + 2 * (width + gap), 0), new Size(width, progressBar1.Height - 1)));
            g.FillRectangle(blueBrush, new Rectangle(new Point(incre + 3 * (width + gap), 0), new Size(width, progressBar1.Height - 1)));
            g.FillRectangle(blueBrush, new Rectangle(new Point(incre + 4 * (width + gap), 0), new Size(width, progressBar1.Height - 1)));
            incre += 10;
            if (incre > progressBar1.Width)
                incre = -5;
        }

        private void LoadingF_FormClosing(object sender, FormClosingEventArgs e)
        {
            timer1.Stop();
        }

    }
}
