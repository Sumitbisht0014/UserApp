using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UserMgmtApi.Models;

namespace UserMgmtApi
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<UserDetail> UserDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured)
            //{
            //    string connectionString = Configuration.GetConnectionString("MyDatabase");
            //    optionsBuilder.UseSqlServer(connectionString);
            //}
        }

    }
}
