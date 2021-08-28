/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("sets", (table) => {
        table.bigInteger("vendor_na").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("sets", (table) => {
        table.dropColumn("vendor_na")
    })
}
