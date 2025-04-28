using Backend_Evoltis.Application.Service.Interface;
using Backend_Evoltis.Domain.Entities;
using Backend_Evoltis.Domain.Interface;

namespace Backend_Evoltis.Application.Service;

public class EmpleadoService : IEmpleadoService
{
    private readonly IEmpleadoRepository _repository;

    public EmpleadoService(IEmpleadoRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Empleado>> GetAllAsync() => await _repository.GetAllAsync();

    public async Task<Empleado?> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

    public async Task AddAsync(Empleado empleado) => await _repository.AddAsync(empleado);

    public async Task UpdateAsync(Empleado empleado) => await _repository.UpdateAsync(empleado);

    public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
}