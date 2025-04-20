using System;
using System.Windows.Forms;

namespace GLOSSA
{
    public partial class DialogSave : Form
    {
        public DialogSave(string FilePath, string title)
        {
            InitializeComponent();
            label1.Text = FilePath;
            Text = title;

        }

        private void btn_Save_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Yes;
            this.Close();
        }

        private void btn_DonSa_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.No;
            this.Close();
        }

        private void btn_Canc_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            this.Close();
        }
    }
}
