using Backend_Evoltis.Domain.Entities;

namespace Backend_Evoltis.Application.Service.Interface;

public interface IEmpleadoService
{
    Task<List<Empleado>> GetAllAsync();
    Task<Empleado?> GetByIdAsync(int id);
    Task AddAsync(Empleado empleado);
    Task UpdateAsync(Empleado empleado);
    Task DeleteAsync(int id);
}
