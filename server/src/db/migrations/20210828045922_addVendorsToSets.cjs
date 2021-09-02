/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("sets", (table) => {
        table.bigInteger("vendor_na_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_eu_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_usa_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_canada_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_uk_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_australia_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_oceana_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_singapore_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_korea_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_china_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_asia_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_sea_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_latam_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_philippines_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.bigInteger("vendor_international_ID").unsigned().index().references("vendors.id").onUpdate("CASCADE").onDelete("CASCADE")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("sets", (table) => {
        table.dropColumn("vendor_na_ID")
        table.dropColumn("vendor_eu_ID")
        table.dropColumn("vendor_usa_ID")
        table.dropColumn("vendor_canada_ID")
        table.dropColumn("vendor_uk_ID")
        table.dropColumn("vendor_australia_ID")
        table.dropColumn("vendor_oceana_ID")
        table.dropColumn("vendor_singapore_ID")
        table.dropColumn("vendor_korea_ID")
        table.dropColumn("vendor_china_ID")
        table.dropColumn("vendor_asia_ID")
        table.dropColumn("vendor_sea_ID")
        table.dropColumn("vendor_latam_ID")
        table.dropColumn("vendor_philippines_ID")
        table.dropColumn("vendor_international_ID")
    })
}
