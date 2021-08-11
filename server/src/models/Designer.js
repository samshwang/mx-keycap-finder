const Model = require("./Model.js")

class Designer extends Model {
  static get tableName() {
    return "designers"
  }

  static get relationMappings() {
    const { Set, SetDesigner } = require("./index.js")

    return {
      sets: {
        relation: Model.ManyToManyRelation,
        modelClass: Set,
        join: {
          from: "designers.id",
          through: {
            from: "setdesigners.designerID",
            to: "setdesigners.setID"
          },
          to: "sets.id"
        }
      },
      setdesigners: {
        relation: Model.HasManyRelation,
        modelClass: SetDesigner,
        join: {
          from: "designer.id",
          to: "setdesigners.designerID"
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

module.exports = Designer