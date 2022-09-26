// {
//   "development": {
//     "database": "my_pantry_dev",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "database": "my_pantry_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "database": "my_pantry_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }

module.exports = {
  development: {
    database: 'my_pantry_dev',
    dialect: 'postgres'
  },
  test: {
    database: 'my_pantry_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
