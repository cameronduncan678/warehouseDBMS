using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using warehousedbms.Models;

namespace warehousedbms.Utils
{
    public class LocationUtils
    {
        public static int GetSpaces(List<Items> _itemes, string location)
        {
            IEnumerable locationSpecific = _itemes.Where(i => i.location == location);

            int spacesUsed = 0;
            foreach (Items item in locationSpecific)
            {
                spacesUsed += item.itemQuantity;
            }

            return spacesUsed;
        }

        public static int GetIncome(int spaces)
        {
            return ((spaces / 5) * 500) + (spaces * 200);
        }

        public static Targets LocationTarget(List<Targets> _targets, string locationId)
        {
            try
            {
                Targets target = _targets.Single(t => t.locationId == locationId);
                return target;
            }
            catch
            {
                return new Targets()
                {
                    id = 0,
                    locationId = "id: null",
                    perc = 0,
                    slots = 0,
                    spaces = 0,
                    income = 0
                };
            }
        }

        public static LocationStatus GetStatusFigures(List<Renting> rentings, string location, int totalUsed)
        {
            var locationRentings = rentings.Where(r => r.location == location).ToList();

            int storage = 0;
            int warning = 0;
            int over = 0;

            foreach (Renting renting in locationRentings)
            {
                string status = RentingUtils.GetStatus(renting.LeaseEnd, renting.status);

                if (status != "vacant")
                {
                    if (status == "storage")
                    {
                        storage++;
                    }

                    if (status == "warning")
                    {
                        warning++;
                    }

                    if (status == "over")
                    {
                        over++;
                    }
                }
            }

            int totalStatus = storage + warning + over;

            float _totalStorage = ((float)storage / totalStatus) * 100;
            float _totalWarning = ((float)warning / totalStatus) * 100;
            float _totalOver = ((float)over / totalStatus) * 100;
            
            LocationStatus stats = new LocationStatus()
            {
                totalStorage = (int)_totalStorage,
                totalWarning = (int)_totalWarning,
                totalOver = (int)_totalOver
            };

            return stats;

        }
    }
}