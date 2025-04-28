using AutoMapper;
using Backend_Evoltis.Domain.Entities;
using Backend_Evoltis.DTOs;

namespace Backend_Evoltis.Mappers;

public class EmpleadoProfile : Profile
{
    public EmpleadoProfile()
    {
        CreateMap<Empleado, EmpleadoDto>().ReverseMap();
    }
}
