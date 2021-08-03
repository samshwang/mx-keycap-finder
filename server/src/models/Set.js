const Model = require("./Model.js")

class Set extends Model {
    static get tableName() {
        return "sets"
    }

    static get relationMappings() {
        const Kit = require("./Kit.js")

        return {
            kits: {
                relation: Model.HasManyRelation,
                modelClass: Kit,
                join: {
                    from: "sets.id",
                    to: "kits.setID"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "profile", "imageURLpath"],
            properties: {
                name: {type: "string", minLength: 1, maxLength: 50},
                profile: {type: "string", minLength: 1, maxLength: 20},
                imageURLpath: {type: "string", minLength: 1},

                link: {type: "string", minLength: 1},
                designer: {type: "string", minLength: 1, maxLength: 20},
                vendor: {type: "string", minLength: 1, maxLength: 20},
                releaseDate: {type: "date"},
                salesFormat: {type: "string", minLength: 1, maxLength: 20},
                round: {type: "integer"},
                status: {type: "string", minLength: 1, maxLength: 20}
            }
        }
    }
}

module.exports = Set