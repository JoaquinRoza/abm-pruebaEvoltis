using Backend_Evoltis.DTOs;
using FluentValidation;

namespace Backend_Evoltis.Validators;

public class EmpleadoDtoValidator : AbstractValidator<EmpleadoDto>
{
    public EmpleadoDtoValidator()
    {
        RuleFor(p => p.Nombre).NotEmpty().MaximumLength(50);
        RuleFor(p => p.Apellido).NotEmpty().MaximumLength(50);
        RuleFor(p => p.Puesto).NotEmpty().MaximumLength(50);
        RuleFor(p => p.Edad).GreaterThan(18);
    }
}