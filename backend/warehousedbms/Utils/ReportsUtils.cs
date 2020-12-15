using System.Collections.Generic;
using System.Linq;
using warehousedbms.Models;

namespace warehousedbms.Utils
{
    public class ReportsUtils
    {
        public static List<string> GetReportLinks(List<ReportLinks> _link, string reportId)
        {
            List<string> links = new List<string>();

            try
            {
                var reportLinks = _link.Where(r => r.reportId == reportId);
                foreach (ReportLinks link in reportLinks)
                {
                    links.Add(link.uri);
                }

                return links;
            }
            catch
            {
                return new List<string>();
            }
        }
    }
}