import { Set, Color, Theme, Designer, Vendor } from "../models/index.js"

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
        const { color, theme, designer, vendor } = queryObject

        let colors, themes, designers
        
        if (color == undefined || color == "") {
            const allColors = await Color.query()
            colors = allColors.map(color => {
                return color.name
            })
        } else {
            colors = color
        }
        if (theme == undefined || theme == "") {
            const allThemes = await Theme.query()
            themes = allThemes.map(theme => {
                return theme.name
            })
        } else {
            themes = theme
        }
        if (designer == undefined || designer == "") {
            const allDesigners = await Designer.query()
            designers = allDesigners.map(designer => {
                return designer.name
            })
        } else {
            designers = designer
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