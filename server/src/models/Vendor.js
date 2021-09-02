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
              to: "sets.vendor_na_ID"
          }
      },
      sets_eu: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_eu_ID"
          }
      },
      sets_usa: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_usa_ID"
          }
      },
      sets_canada: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_canada_ID"
          }
      },
      sets_uk: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_uk_ID"
          }
      },
      sets_australia: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_australia_ID"
          }
      },
      sets_oceana: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_oceana_ID"
          }
      },
      sets_singapore: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_singapore_ID"
          }
      },
      sets_korea: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_korea_ID"
          }
      },
      sets_china: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_china_ID"
          }
      },
      sets_asia: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_asia_ID"
          }
      },
      sets_sea: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_sea_ID"
          }
      },
      sets_latam: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_latam_ID"
          }
      },
      sets_philippines: {
          relation: Model.HasManyRelation,
          modelClass: Set,
          join: {
              from: "vendors.id",
              to: "sets.vendor_philippines_ID"
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
