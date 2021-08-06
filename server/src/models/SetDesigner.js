const Model = require("./Model.js")

class SetDesigner extends Model {
  static get tableName() {
    return "setdesigners"
  }

  static get relationMappings() {
    const { Set, Designer} = require("./index.js")

    return {
      set: {
        relation: Model.BelongsToOneRelation,
        modelClass: Set,
        join: {
          from: "setdesigners.setID",
          to: "sets.id"
        }
      },
      vendor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Designer,
        join: {
          from: "setdesigners.designerID",
          to: "designers.id"
        }
      }
    }
  }
}

module.exports = SetDesigner