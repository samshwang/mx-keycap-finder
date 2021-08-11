/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("kits", (table) => {
        table.bigIncrements("id")

        table.string("name").notNullable()
        table.decimal("price", 8, 2).notNullable()
        table.string("imageURLpath").notNullable()
        
        table.bigInteger("setID").unsigned().notNullable().index().references("sets.id").onUpdate("CASCADE").onDelete("CASCADE")

        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("kits")
}
