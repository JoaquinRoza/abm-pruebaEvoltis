using Backend_Evoltis.Domain.Entities;

namespace Backend_Evoltis.Domain.Interface;

public interface IEmpleadoRepository
{
    Task<List<Empleado>> GetAllAsync();
    Task<Empleado?> GetByIdAsync(int id);
    Task AddAsync(Empleado empleado);
    Task UpdateAsync(Empleado empleado);
    Task DeleteAsync(int id);
}