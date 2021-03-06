﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using warehousedbms.Models;

namespace warehousedbms.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Renting> Renting { get; set; }
        public DbSet<Items> Items { get; set; }
        
        public DbSet<Location> Location { get; set; }
        
        public DbSet<Targets> Targets { get; set; }
        
        public DbSet<Reports> Reports { get; set; }
        
        public DbSet<ReportLinks> ReportLinks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
