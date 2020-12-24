namespace warehousedbms.Models
{
    public class RawReport
    {
        public string reportTitle { get; set; }
        public string reportAuthor { get; set; }
        public string reportText { get; set; }
        public string[] reportLinks { get; set; }
    }
}