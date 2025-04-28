using Backend_Evoltis.Application.Service.Interface;
using Backend_Evoltis.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Backend_Evoltis.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmpleadoController : ControllerBase
{
    private readonly IEmpleadoService _service;

    public EmpleadoController(IEmpleadoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var empleados = await _service.GetAllAsync();
        return Ok(empleados);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var empleado = await _service.GetByIdAsync(id);
        if (empleado == null)
            return NotFound();

        return Ok(empleado);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Empleado empleado)
    {
        empleado.Id = 0;
        await _service.AddAsync(empleado);
        return CreatedAtAction(nameof(Get), new { id = empleado.Id }, empleado);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Empleado empleado)
    {
        if (id != empleado.Id)
            return BadRequest("El id del body no coincide con el parámetro");

        await _service.UpdateAsync(empleado);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteAsync(id);
        return NoContent();
    }
}
