using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend_Evoltis.Domain.Entities;

public class Empleado
{
    public int Id { get; set; }

    public string Nombre { get; set; }

    public string Apellido { get; set; }

    public string Puesto { get; set; }

    public int Edad { get; set; }
}
