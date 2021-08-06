const Model = require("./Model.js")

class Theme extends Model {
    static get tableName() {
        return "themes"
    }

    static get relationMappings() {
        const { Set, SetTheme } = require("./index.js")

        return {
            sets: {
                relation: Model.ManyToManyRelation,
                modelClass: Set,
                join: {
                    from: "themes.id",
                    through: {
                        from: "setthemes.themeID",
                        to: "setthemes.setID"
                    },
                    to: "sets.id"
                }
            },
            setthemes: {
                relation: Model.HasManyRelation,
                modelClass: SetTheme,
                join: {
                    from: "themes.id",
                    to: "setthemes.themeID"
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

module.exports = Theme