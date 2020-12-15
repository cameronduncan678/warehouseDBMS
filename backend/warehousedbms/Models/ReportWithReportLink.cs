using System.Collections.Generic;

namespace warehousedbms.Models
{
    public class ReportWithReportLink
    {
        public int id { get; set; }
        public string reportId { get; set; }
        public string reportDate { get; set; }
        public string reportTitle { get; set; }
        public string reportAuthor { get; set; }
        public string reportText { get; set; }
        public List<string> links { get; set; }
    }
}