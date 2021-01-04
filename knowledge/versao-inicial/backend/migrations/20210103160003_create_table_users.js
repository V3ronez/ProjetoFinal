
exports.up = function (knex, Promise) { //Up sempre indo em direção a nova atualizacao
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)

    })
};

exports.down = function (knex, Promise) { //Down sempre o contrario do Up
    return knex.schema.dropTable('users')
};
