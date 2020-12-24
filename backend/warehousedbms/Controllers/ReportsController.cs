using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Unified;
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

        [HttpPost]
        public async Task<IActionResult> PostReport([FromBody] RawReport _report)
        {
            string ItemId = UnifiedId.NewId();
            
            Reports report = new Reports();
            List<ReportLinks> links = new List<ReportLinks>();
            
            var _date = DateTime.UtcNow.Date; 

            report.reportId = ItemId;
            report.reportTitle = _report.reportTitle;
            report.reportAuthor = _report.reportAuthor;
            report.reportDate = $"{_date.Year}-{_date.Month}-{_date.Day}";
            report.reportText = _report.reportText;

            await _dbContext.Reports.AddAsync(report);
            foreach (string _link in _report.reportLinks)
            {
                await _dbContext.ReportLinks.AddAsync(new ReportLinks()
                {
                    reportId = ItemId,
                    uri = _link
                });
            }
            
            await _dbContext.SaveChangesAsync();
            
            return Ok();
        }
    }
}