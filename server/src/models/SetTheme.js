const Model = require("./Model.js")

class SetTheme extends Model {
    static get tableName() {
        return "setthemes"
    }

    static get relationMappings() {
        const { Set, Theme } = require("./index.js")

        return {
            set: {
                relation: Model.BelongsToOneRelation,
                modelClass: Set,
                join: {
                    from: "setthemes.setID",
                    to: "sets.id"
                }
            },
            theme: {
                relation: Model.BelongsToOneRelation,
                modelClass: Theme,
                join: {
                    from: "setthemes.themeID",
                    to: "themes.id"
                }
            }
        }
    }
}

module.exports = SetTheme