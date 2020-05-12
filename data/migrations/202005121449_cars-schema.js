exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string('VIN', 50)
      .notNullable()
      .unique();
    tbl.string('make', 100)
      .notNullable();
    tbl.string('model', 100)
      .notNullable();
    tbl.decimal('mileage')
      .notNullable();
    tbl.string('transmission', 200);
    tbl.string('title_status', 200);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
