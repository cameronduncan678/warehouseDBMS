using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using warehousedbms.Data;
using warehousedbms.Models;
using warehousedbms.Utils;

namespace warehousedbms.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("reports")]
    public class ReportsController : ControllerBase
    {
        private readonly DataContext _dbContext;

        public ReportsController(DataContext dataContext)
        {
            _dbContext = dataContext;
        }

        [HttpGet]
        public IEnumerable GetReports()
        {
            var _Reports = _dbContext.Reports.ToList();
            var _Reportlinks = _dbContext.ReportLinks.ToList();
            
            List<ReportWithReportLink> reports = new List<ReportWithReportLink>();

            foreach (Reports report in _Reports)
            {
                reports.Add(new ReportWithReportLink()
                {
                    id = report.id, 
                    reportId = report.reportId,
                    reportDate = report.reportDate,
                    reportTitle = report.reportTitle,
                    reportAuthor = report.reportAuthor,
                    reportText = report.reportText,
                    links = ReportsUtils.GetReportLinks(_Reportlinks, report.reportId)
                });
            }

            return reports;
        }
    }
}