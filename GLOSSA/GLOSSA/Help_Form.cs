using FastColoredTextBoxNS;
using System;
using System.Drawing;
using System.Windows.Forms;

namespace GLOSSA
{
    public partial class Help_Form : Form
    {
        public Help_Form()
        {
            InitializeComponent();
            timer1.Start();
            fctb.DefaultStyle = new JokeStyle();

        }

        private const int CsDropShadow = 0x00020000;
        protected override CreateParams CreateParams
        {
            get
            {
                CreateParams cp = base.CreateParams;
                cp.ClassStyle = CsDropShadow;
                return cp;
            }
        }


        private void timer1_Tick(object sender, EventArgs e)
        {
            fctb.Invalidate();

        }

        private void Help_Form_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void Help_Form_FormClosed(object sender, FormClosedEventArgs e)
        {
            timer1.Stop();
        }
    }
    class JokeStyle : TextStyle
    {
        public JokeStyle() : base(null, null, FontStyle.Regular)
        {
        }

        public override void Draw(Graphics gr, Point position, Range range)
        {
            foreach (Place p in range)
            {
                int time = (int)(DateTime.Now.TimeOfDay.TotalMilliseconds / 2);
                int angle = (int)(time % 360L);
                int angle2 = (int)((time - (p.iChar - range.Start.iChar) * 20) % 360L) * 2;
                int x = position.X + (p.iChar - range.Start.iChar) * range.tb.CharWidth;
                Range r = range.tb.GetRange(p, new Place(p.iChar + 1, p.iLine));
                Point point = new Point(x, position.Y + (int)(5 + 5 * Math.Sin(Math.PI * angle2 / 180)));
                gr.ResetTransform();
                gr.TranslateTransform(point.X + range.tb.CharWidth / 2, point.Y + range.tb.CharHeight / 2);
                gr.RotateTransform(angle);
                gr.ScaleTransform(0.8f, 0.8f);
                gr.TranslateTransform(-range.tb.CharWidth / 2, -range.tb.CharHeight / 2);
                base.Draw(gr, new Point(0, 0), r);
            }
            gr.ResetTransform();
        }
    }

}
