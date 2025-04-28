using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Backend_Evoltis.Domain.Entities;

namespace Backend_Evoltis.Infraestructure.Persistences.Configurations;

public class EmpleadoConfiguration : IEntityTypeConfiguration<Empleado>
{
    public void Configure(EntityTypeBuilder<Empleado> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Nombre).IsRequired().HasMaxLength(50);
        builder.Property(p => p.Apellido).IsRequired().HasMaxLength(50);
        builder.Property(p => p.Puesto).IsRequired().HasMaxLength(50);
        builder.Property(p => p.Edad).IsRequired();
    }
}
