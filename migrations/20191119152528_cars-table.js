exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("make")
      .unique()
      .notNullable();
    tbl
      .text("model")
      .unique()
      .notNullable();
    tbl.integer("year").notNullable();
  });
  //change we want to make
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
  //undoing change
};
