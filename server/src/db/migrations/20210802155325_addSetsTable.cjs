/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("sets", (table) => {
        table.bigIncrements("id")

        table.string("name").notNullable()
        table.string("profile").notNullable()
        table.string("imageURLpath").notNullable()

        table.string("link")
        table.date("releaseDate")
        table.string("salesFormat")
        table.string("round")
        table.string("status")

        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("sets")
}
