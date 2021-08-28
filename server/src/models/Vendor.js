const Model = require("./Model.js")

class Vendor extends Model {
  static get tableName() {
    return "vendors"
  }

  static get relationMappings() {
    const { Set, SetVendor } = require("./index.js")

    return {
      sets: {
        relation: Model.ManyToManyRelation,
        modelClass: Set,
        join: {
          from: "vendors.id",
          to: "sets.id"
        }
      },
      setvendors: {
        relation: Model.HasManyRelation,
        modelClass: SetVendor,
        join: {
          from: "vendor.id",
          to: "setvendors.vendorID"
        }
      },
      sets_na: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_na"
          }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 30 },
      }
    }
  }
}

module.exports = Vendor
