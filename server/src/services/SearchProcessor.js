import { Set, Color, Theme, Designer } from "../models/index.js"

class SearchProcessor {
    static arrayify(userString) {
        if (userString) {
            const array = userString.split(",")
            const trimmedArray = array.map( element => {
                return element.trim()
            })
            return trimmedArray
        } else {
            return userString
        }
    }

    static arrayifyObject(searchObject) {
        Object.keys(searchObject).forEach( (field) => {
            searchObject[field] = this.arrayify(searchObject[field])
        })
        return searchObject
    }

    static async databaseQuery(queryObject) {
        let { colors, themes, designers } = queryObject
        
        if (colors == undefined || colors == "") {
            const allColors = await Color.query()
            colors = allColors.map(color => {
                return color.name
            })
        } else {
        }
        if (themes == undefined || themes == "") {
            const allThemes = await Theme.query()
            themes = allThemes.map(theme => {
                return theme.name
            })
        }
        if (designers == undefined || designers == "") {
            const allDesigners = await Designer.query()
            designers = allDesigners.map(designer => {
                return designer.name
            })
        }

        const sets = await Set.query().joinRelated("[colors, themes, designers]")
            .where((builder) => builder.whereIn("colors.name", colors))
            .where((builder) => builder.whereIn("themes.name", themes))
            .where((builder) => builder.whereIn("designers.name", designers))
            .groupBy("sets.id")
        
        return sets
    }
}

export default SearchProcessor