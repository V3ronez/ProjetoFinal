const config = require ('../knexfile.js')
const knex = require ('knex')(config)

knex.migrate.latest([config]) //nao usar em um sistema maior
module.exports = knex