// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    database: 'knowledge',
    user: 'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 50
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
