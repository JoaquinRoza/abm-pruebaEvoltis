## Instrucciones para correr el proyecto

### Backend

#### a) Crear Base de Datos
En tu servidor MySQL, correr la siguiente query:

```sql
CREATE DATABASE pruebaEvoltis;

USE pruebaEvoltis;

CREATE TABLE empleados (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  puesto VARCHAR(50) NOT NULL,
  edad INT NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
```

El usuario y contraseña deben configurarse en Backend-Evoltis/appsettings.json según tu entorno local.

Ejemplo:
"ConnectionStrings": {
  "DefaultConnection": "server=localhost;database=pruebaEvoltis;user=tu-usuario;password=tu-contraseña"
}

Iniciar proyecto, se inicializará en el puerto 5227

------------

### Frontend
Sobre la carpeta Frontend-Evoltis

Ejecutar comandos:
  - npm install
  - ng serve --o
