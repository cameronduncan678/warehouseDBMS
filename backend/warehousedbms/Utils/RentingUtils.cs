using System;
using System.Collections.Generic;
using System.Linq;
using warehousedbms.Models;

namespace warehousedbms.Utils
{
    public class RentingUtils
    {
        public static List<Items> GetItems(List<Items> _items, string _itemsId)
        {
            var query = _items.Where(i => i.itemsId == _itemsId);
            return query.ToList();
        }

        public static int GetItemQuantity(List<Items> _items)
        {
            return _items.Count;
        }
        
        public static int[] GetSpacesSlots(List<Items> _items)
        {
            int totalQuantity = 0;
            foreach (Items item in _items)
            {
                totalQuantity += item.itemQuantity;
            }

            int slots = totalQuantity / 5;
            int spaces = totalQuantity - (5 * slots);

            return new[] {spaces, slots};

        }
        
        public static int GetPricePerWeek(int _spaces, int _slots)
        {
            return (_spaces * 200) + (_slots * 500);
        }
        
        public static string GetStatus(string _leaseDate, string currentStatus)
        {
            // _leaseDate = "2020-11-05"
            var leaseDate = DateTime.Parse(_leaseDate).Date;
            var today = DateTime.Now.Date;

            if (currentStatus != "vacant")
            {
                if (leaseDate.Year < today.Year)
                {
                    return "over";
                }
                else if (leaseDate.Month < today.Month)
                {
                    return "over";
                }
                else if (leaseDate.Day < today.Day)
                {
                    return "over";
                }
                else if (leaseDate.Day > today.Day && leaseDate.Day > (today.Day - 7))
                {
                    return "warning";
                }
            }
            else if (currentStatus == "vacant")
                return currentStatus;

            return "storage";
        }
        
    }
}