using System;
using System.Globalization;
using System.Linq;
using warehousedbms.Data;

namespace warehousedbms.Services
{
    public class ProjectionService
    {
        private readonly DataContext _dataContext;

        public ProjectionService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public int projectionGenerator(string location)
        {
            var rentings = _dataContext.Renting.ToList();
            var locationRentings = from rent in rentings where rent.location == location select rent;

            var todaysDate = DateTime.UtcNow.Date;

            int projection = 0;
            
            foreach (var renting in locationRentings)
            {
                var date = DateTime.ParseExact(renting.LeaseEnd, "yyyy-MM-dd", new CultureInfo("en-US"));
                if (date.Month > todaysDate.Month || date.Year > todaysDate.Year)
                {
                    if (renting.status != "vacant")
                    {
                        projection += renting.pricePerWeek;
                    }
                }
            }
            return projection;
        }

    }
}