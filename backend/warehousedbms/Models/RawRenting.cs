namespace warehousedbms.Models
{
    public class RawRenting
    {
        public string LeaseEnd { get; set; }
        public string client { get; set; }
        public int itemQuantity { get; set; }
        public RawItems[] items { get; set; }
        public string location { get; set; }
        public int pricePerWeek { get; set; }
        public int slots { get; set; }
        public int spaces { get; set; }
        public string status { get; set; }
    }
}