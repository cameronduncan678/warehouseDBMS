namespace warehousedbms.Models
{
    public class Locations
    {
        public int id { get; set; }
        public string locationId { get; set; }
        public string location { get; set; }
        public int totalSpaces { get; set; }
        public int totalSlots { get; set; }
        public int usedSpaces { get; set; }
        public int usedSlots { get; set; }
        public int availableSpaces { get; set; }
        public int availableSlots { get; set; }
        public int incomePerWeek { get; set; }
        public int projection { get; set; }
    }
}