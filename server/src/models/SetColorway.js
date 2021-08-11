const Model = require("./Model.js")

class SetColorway extends Model {
    static get tableName() {
        return "setcolorways"
    }

    static get relationMappings() {
        const { Set, Color } = require("./index.js")

        return {
            set: {
                relation: Model.BelongsToOneRelation,
                modelClass: Set,
                join: {
                    from: "setcolorways.setID",
                    to: "sets.id"
                }
            },
            color: {
                relation: Model.BelongsToOneRelation,
                modelClass: Color,
                join: {
                    from: "setcolorways.colorID",
                    to: "colors.id"
                }
            }
        }
    }
}

module.exports = SetColorway