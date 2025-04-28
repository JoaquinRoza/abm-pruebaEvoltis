export class Empleado{
    id: number;
    nombre: string;
    apellido:string;
    puesto: string;
    edad: number;

constructor(id: number, nombre: string, apellido: string, puesto: string, edad: number) 
{
     this.id = id;
     this.nombre = nombre;
     this.apellido = apellido;
     this.puesto = puesto;
     this.edad = edad;
}
}