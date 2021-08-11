/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("setdesigners", (table) => {
    table.bigIncrements("id")

    table.bigInteger("setID").unsigned().notNullable().index().references("sets.id").onUpdate("CASCADE").onDelete("CASCADE")
    table.bigInteger("designerID").unsigned().notNullable().index().references("designers.id")

    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("setdesigners")
}
