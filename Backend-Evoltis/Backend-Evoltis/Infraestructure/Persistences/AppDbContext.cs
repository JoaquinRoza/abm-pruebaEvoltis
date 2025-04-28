using Backend_Evoltis.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend_Evoltis.Infraestructure.Persistences;

public class AppDbContext : DbContext
{
    public DbSet<Empleado> Empleados => Set<Empleado>();

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }
}
