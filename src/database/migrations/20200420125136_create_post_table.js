
exports.up = function(knex) {
  return knex.schema.createTable('post', function(table){
      table.increments();
      table.string('title').notNullable();
      table.string('subTitle').notNullable();
      table.string('image').notNullable();
      table.string('text').notNullable();
      table.date('date').notNullable();

      table.string('autor').notNullable();
      table.foreign('autor').references('id').inTable('users');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('post');
};
