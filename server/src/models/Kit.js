const Model = require("./Model.js")

class Kit extends Model {
    static get tableName() {
        return "kits"
    }

    static get relationMappings() {
        const Set = require("./Set.js")

        return {
            set: {
                relation: Model.BelongsToOneRelation,
                modelClass: Set,
                join: {
                    from: "kits.setID",
                    to: "sets.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "price", "imageURLpath", "setID"],
            properties: {
                name: {type: "string", minLength: 1, maxLength: 50},
                price: {type: "decimal"},
                imageURLpath: {type: "string", minLength: 1},
                setID: {type: "bigInteger"}
            }
        }
    }
}

module.exports = Kit