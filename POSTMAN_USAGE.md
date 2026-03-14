# Uso de la API de Parking Lot con Postman

## Prerrequisitos

1. Asegúrate de tener el servidor corriendo en `http://localhost:3001`
2. Instala Postman (versión 8.0 o superior)
3. Importa la colección de Postman que se encuentra en el archivo `ParkingLotAPI.postman_collection.json`

## Importar la Colección de Postman

1. Abre Postman
2. Haz clic en el botón "Import" (icono de flecha abajo) en la esquina superior izquierda
3. Selecciona "File" y busca el archivo `ParkingLotAPI.postman_collection.json`
4. Haz clic en "Import" para cargar la colección

## Pruebas Básicas

La colección incluye los siguientes endpoints:

### 1. Test Server

- **Health Check**: Verifica que el servidor esté corriendo correctamente

### 2. Vehiculos

- **Get All Vehiculos**: Obtiene todos los vehículos registrados
- **Create Vehiculo**: Crea un nuevo vehículo
- **Get Vehiculo by ID**: Obtiene un vehículo por su ID
- **Update Vehiculo**: Actualiza un vehículo existente
- **Delete Vehiculo**: Elimina un vehículo

### 3. Usuarios

- **Get All Usuarios**: Obtiene todos los usuarios
- **Create Usuario**: Crea un nuevo usuario

### 4. Administradores

- **Get All Administradores**: Obtiene todos los administradores
- **Create Administrador**: Crea un nuevo administrador

### 5. Operadores

- **Get All Operadores**: Obtiene todos los operadores
- **Create Operador**: Crea un nuevo operador

### 6. Pico y Placa

- **Get All PicoPlaca**: Obtiene todas las restricciones de pico y placa
- **Create PicoPlaca**: Crea una nueva restricción de pico y placa

### 7. Acceso/Salidas

- **Get All Acceso/Salidas**: Obtiene todos los registros de acceso y salida
- **Create Acceso/Salida**: Crea un nuevo registro de acceso o salida

### 8. Reportes Incidencia

- **Get All Reportes**: Obtiene todos los reportes de incidencia
- **Create Reporte**: Crea un nuevo reporte de incidencia
- **Get Reportes by Vehiculo**: Obtiene reportes de incidencia por vehículo

## Ejemplo de Uso

1. **Verificar el servidor**: Ejecuta el endpoint "Health Check" - debe devolver un mensaje de bienvenida
2. **Crear un vehículo**: Ejecuta el endpoint "Create Vehiculo" - modifica los datos según sea necesario
3. **Obtener vehículos**: Ejecuta el endpoint "Get All Vehiculos" - debe incluir el vehículo creado
4. **Obtener vehículo por ID**: Ejecuta el endpoint "Get Vehiculo by ID" - usa el ID del vehículo creado
5. **Actualizar vehículo**: Ejecuta el endpoint "Update Vehiculo" - modifica los datos y usa el ID del vehículo
6. **Eliminar vehículo**: Ejecuta el endpoint "Delete Vehiculo" - usa el ID del vehículo a eliminar

## Notas Importantes

- Todos los endpoints usan la URL base: `http://localhost:3001/api/`
- Asegúrate de que el servidor esté corriendo antes de hacer peticiones
- Los datos se almacenan en memoria (no en una base de datos persistente)
- Al reiniciar el servidor, se perderán todos los datos almacenados

## Errores Comunes

- **404 Not Found**: El recurso solicitado no existe (verifica el ID)
- **400 Bad Request**: Los datos enviados son incorrectos (verifica el cuerpo de la solicitud)
- **500 Internal Server Error**: Error interno del servidor (verifica la consola del servidor)

## Cuerpo de Peticiones

Algunos endpoints requieren un cuerpo de solicitud JSON. Asegúrate de:

1. Seleccionar el método POST o PUT
2. Ir a la pestaña "Body"
3. Seleccionar "raw" y "JSON"
4. Escribir o pegar el JSON correspondiente

## Ejemplo de JSON para Crear un Vehículo

```json
{
  "placa": "XYZ789",
  "color": "azul",
  "modelo": "2022",
  "marca": "Honda",
  "tipo": "suv",
  "usuario": "54321"
}
```
