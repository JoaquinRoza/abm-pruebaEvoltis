using Backend_Evoltis.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Backend_Evoltis.Domain.Interface;

namespace Backend_Evoltis.Infraestructure.Persistences.Repositories;

public class EmpleadoRepository : IEmpleadoRepository
{
    private readonly AppDbContext _context;

    public EmpleadoRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Empleado>> GetAllAsync()
    {
        return await _context.Empleados.ToListAsync();
    }

    public async Task<Empleado?> GetByIdAsync(int id)
    {
        return await _context.Empleados.FindAsync(id);
    }

    public async Task AddAsync(Empleado empleado)
    {
        await _context.Empleados.AddAsync(empleado);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Empleado empleado)
    {
        _context.Empleados.Update(empleado);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var entity = await _context.Empleados.FindAsync(id);
        if (entity is not null)
        {
            _context.Empleados.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}