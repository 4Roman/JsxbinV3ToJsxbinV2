using System;
using System.IO;
using System.Windows.Forms;

namespace JsxbinV3ToJsxbinV2
{
    static class Program
    {
        static void Main(string[] args)
        {
            string path1 = "1.jsxbin";
            string path2 = "2.jsxbin";
            string path3 = "3.jsxbin";
            string big;
            string wrongformat = "eval";
            char[] charsToTrim = { '"', ')', ';' };
            big = "";

            try
            {
                using (StreamReader readpath1 = new StreamReader(path1))
                {
                    big = readpath1.ReadLine();
                }
                if (big.StartsWith(wrongformat))
                {
                    big = big.Remove(0, 6);
                    big = big.TrimEnd(charsToTrim);
                    big = ReplaceAt(big, 13, '0');
                    using (StreamWriter writepath3 = new StreamWriter(path3, false, System.Text.Encoding.Default))
                    {
                        writepath3.WriteLine(big);
                    }
                    using (StreamWriter writepath2 = new StreamWriter(path2, false, System.Text.Encoding.Default))
                    {
                        using (StreamReader readpath3 = new StreamReader(path3))
                        {
                            big = "";
                            for (int i = 0; i < 81; i++)// первая строка
                            {
                                big = big + (char)readpath3.Read();
                            }
                            big = big + Environment.NewLine;
                            writepath2.Write(big);

                            var txt = File.ReadAllText(path3);
                            int strings = (txt.Length + 1) / 80;
                            for (int n = 0; n < strings; n++)
                            {
                                big = "";
                                for (int i = 0; i < 80; i++)//каждая строка
                                {
                                    big = big + (char)readpath3.Read();
                                }
                                big = big + Environment.NewLine;
                                writepath2.Write(big);
                            }
                        }
                    }
                    File.Delete(path3);
                }

            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message);
            }
        
        }
        public static string ReplaceAt(this string input, int index, char newChar)
        {
            if (input == null)
            {
                throw new ArgumentNullException("input");
            }
            char[] chars = input.ToCharArray();
            chars[index] = newChar;
            return new string(chars);
        }
    }
}
