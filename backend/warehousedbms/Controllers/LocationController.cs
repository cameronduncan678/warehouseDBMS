using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using warehousedbms.Data;
using System.Linq;
using warehousedbms.Models;
using warehousedbms.Services;
using warehousedbms.Utils;

namespace warehousedbms.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("location")]
    public class LocationController: ControllerBase
    {
        private readonly DataContext _dbContext;

        public LocationController(DataContext dataContext)
        {
            _dbContext = dataContext;
        }
        
        [HttpGet("")]
        public IEnumerable GetLocations()
        {
            var locations = _dbContext.Location.ToList();
            var targets = _dbContext.Targets.ToList();
            var items = _dbContext.Items.ToList();
            var rentings = _dbContext.Renting.ToList();

            List<LocationWithTargets> locationWithTargets = new List<LocationWithTargets>();
            
            var projection = new ProjectionService(_dbContext);

            foreach (Location loc in locations)
            {
                int spaces = LocationUtils.GetSpaces(items, loc.location);

                locationWithTargets.Add(new LocationWithTargets()
                {
                    locationId = loc.locationId,
                    location = loc.location,
                    totalSpaces = loc.totalSpaces,
                    totalSlots = loc.totalSpaces / 5,
                    usedSpaces = spaces,
                    usedSlots = spaces / 5,
                    availableSpaces = loc.totalSpaces - spaces,
                    availableSlots = (loc.totalSpaces - spaces) / 5,
                    incomePerWeek = LocationUtils.GetIncome(spaces),
                    projection = projection.projectionGenerator(loc.location),
                    targets = LocationUtils.LocationTarget(targets, loc.locationId),
                    stats = LocationUtils.GetStatusFigures(rentings, loc.location, spaces)
                });
            }

            return locationWithTargets;
        }
    }
}