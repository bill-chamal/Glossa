using Microsoft.Win32;
using System;
using System.Configuration;
using System.Runtime.InteropServices;
using System.Threading;
using System.Windows.Forms;

namespace GLOSSA
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        /// 
        [DllImport("shell32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        public static extern void SHChangeNotify(uint wEventID, uint uFlags, IntPtr dwItem1, IntPtr swItem2);

        [STAThread]
        static void Main()
        {
            if (IsAssociated())
                Associate();

            if (Environment.OSVersion.Version.Major >= 6)
                SetProcessDPIAware();

            Application.EnableVisualStyles();
            
            Application.SetCompatibleTextRenderingDefault(false);
            try
            {
                var lang = ConfigurationManager.AppSettings["language"];
                Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo(lang);
                Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo(lang);
                Application.Run(new Form1());
                // Application.Run(new LoadingF());
            }
            catch (Exception ex)
            {
                MessageBox.Show("Runtime Error:\n" + ex.Message + "\nThe application has closed!", "Glossa", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
        [System.Runtime.InteropServices.DllImport("user32.dll")]
        private static extern bool SetProcessDPIAware();



        public static bool IsAssociated()
        {
            return (Registry.CurrentUser.OpenSubKey("Software\\Microsoft\\CurrentVersion\\Explorer\\FileExts\\.gl", false) == null);
        }
        public static void Associate()
        {
            RegistryKey FileReg = Registry.CurrentUser.CreateSubKey("Software\\Classes\\.gl");
            RegistryKey AppReg = Registry.CurrentUser.CreateSubKey("Software\\Classes\\Aplications\\GLOSSA.exe");
            RegistryKey AppAssoc = Registry.CurrentUser.CreateSubKey("Software\\Microsoft\\CurrentVersion\\Explorer\\FileExts\\.gl");

            //FileReg.CreateSubKey("DefaultIco").SetValue("", "C:\\Users\\basil\\Documents\\Visual Studio Net App C#\\Word\\Azure Word\\icons\\word_document.ico");
            FileReg.CreateSubKey("PersceivedType").SetValue("", "Text");

            AppReg.CreateSubKey("shell\\open\\command").SetValue("", "\"" + Application.ExecutablePath + "\" %1");
            AppReg.CreateSubKey("shell\\edit\\command").SetValue("", "\"" + Application.ExecutablePath + "\" %1");
            AppReg.CreateSubKey("DefaultIco").SetValue("", "Software\\Microsoft\\CurrentVersion\\Exploler\\FileExts\\.gl");

            AppAssoc.CreateSubKey("UserChoice").SetValue("Progit", "Aplications\\GLOSSA.exe");
            SHChangeNotify(0x08000000, 0x0000, IntPtr.Zero, IntPtr.Zero);

        }


    }


}
