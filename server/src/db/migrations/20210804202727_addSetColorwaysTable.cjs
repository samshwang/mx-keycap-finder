/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("setcolorways", (table) => {
        table.bigIncrements("id")

        table.bigInteger("setID").unsigned().notNullable().index().references("sets.id")
        table.bigInteger("colorID").unsigned().notNullable().index().references("colors.id")

        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("setColorways")
}
