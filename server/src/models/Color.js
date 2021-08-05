const Model = require("./Model.js")

class Color extends Model {
    static get tableName() {
        return "colors"
    }

    static get relationMappings() {
        const { Set, SetColorway } = require("./index.js")

        return {
            sets: {
                relation: Model.ManyToManyRelation,
                modelClass: Set,
                join: {
                    from: "colors.id",
                    through: {
                        from: "setcolorways.colorID",
                        to: "setcolorways.setID"
                    },
                    to: "sets.id"
                }
            },
            setColorways: {
                relation: Model.HasManyRelation,
                modelClass: SetColorway,
                join: {
                    from: "colors.id",
                    to: "setcolorways.colorID"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: {type: "string", minLength: 1, maxLength: 30},
            }
        }
    }
}

module.exports = Color