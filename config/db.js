const postgres = require('postgres')

// Obtener CONNECTION STRING desde variables de entorno
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error(
    'DATABASE_URL no está definida en las variables de entorno. ' +
    'Verifica el archivo .env'
  )
}

// Crear instancia de conexión PostgreSQL
const sql = postgres(connectionString, {
  // Opciones de configuración para Supabase
  ssl: 'require', // Supabase requiere SSL
  max: 20, // Pool de conexiones máximo
  idle_timeout: 30, // Timeout de inactividad en segundos
  connect_timeout: 10, // Timeout de conexión en segundos
})

// Log de inicialización en desarrollo
if (process.env.NODE_ENV !== 'production') {
  console.log('✓ Conexión PostgreSQL configurada correctamente')
  console.log(
    `  Host: ${process.env.DB_HOST}`
  )
  console.log(
    `  Base de datos: ${process.env.DB_NAME}`
  )
}

module.exports = sql