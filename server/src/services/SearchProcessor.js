import { Color, Set, Theme } from "../models/index.js"

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

    static async databaseQuery(queryObject) {
        const { color, theme } = queryObject

        let sets

        if (color && theme) {
            sets = await Set.query().joinRelated("[colors, themes]")
                .where( (builder) =>  builder.whereIn("colors.name", color))
                .where( (builder) => builder.whereIn("themes.name", theme))
                .groupBy("sets.id")
        } else if (color) {
            sets = await Set.query().joinRelated("colors")
                .where( (builder) =>  builder.whereIn("colors.name", color))
                .groupBy("sets.id")
        } else if (theme) {
            sets = await Set.query().joinRelated("themes")
                .where( (builder) =>  builder.whereIn("themes.name", theme))
        }
        else {
            sets = await Set.query()
        }
        
        return sets
    }
}

export default SearchProcessor