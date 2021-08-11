const Model = require("./Model.js")

class SetVendor extends Model {
  static get tableName() {
    return "setvendors"
  }

  static get relationMappings() {
    const { Set, Vendor } = require("./index.js")

    return {
      set: {
        relation: Model.BelongsToOneRelation,
        modelClass: Set,
        join: {
          from: "setvendors.setID",
          to: "sets.id"
        }
      },
      vendor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Vendor,
        join: {
          from: "setvendors.vendorID",
          to: "vendors.id"
        }
      }
    }
  }
}

module.exports = SetVendor