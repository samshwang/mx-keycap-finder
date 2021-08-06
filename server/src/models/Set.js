const Model = require("./Model.js")

class Set extends Model {
    static get tableName() {
        return "sets"
    }

    static get relationMappings() {
        const { Kit, Color, SetColorway, Theme, SetTheme } = require("./index.js")

        return {
            kits: {
                relation: Model.HasManyRelation,
                modelClass: Kit,
                join: {
                    from: "sets.id",
                    to: "kits.setID"
                }
            },

            colors: {
                relation: Model.ManyToManyRelation,
                modelClass: Color,
                join: {
                    from: "sets.id",
                    through: {
                        from: "setcolorways.setID",
                        to: "setcolorways.colorID"
                    },
                    to: "colors.id"
                }
            },
            setcolorways: {
                relation: Model.HasManyRelation,
                modelClass: SetColorway,
                join: {
                    from: "sets.id",
                    to: "setcolorways.setID"
                }
            },

            themes: {
                relation: Model.ManyToManyRelation,
                modelClass: Theme,
                join: {
                    from: "sets.id",
                    through: {
                        from: "setthemes.setID",
                        to: "setthemes.themeID"
                    },
                    to: "themes.id"
                }
            },
            setthemes: {
                relation: Model.HasManyRelation,
                modelClass: SetTheme,
                join: {
                    from: "sets.id",
                    to: "setthemes.setID"
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