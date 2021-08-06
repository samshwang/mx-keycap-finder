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

    static arrayifyObject(searchObject) {
        Object.keys(searchObject).forEach( (field) => {
            searchObject[field] = this.arrayify(searchObject[field])
        })
        return searchObject
    }

    static async databaseQuery(queryObject) {
        const { color, theme, designer, vendor } = queryObject

        let sets

        if (color && theme && designer && vendor) {
            sets = await Set.query().joinRelated("[colors, themes, designers, vendors]")
                .where((builder) => builder.whereIn("colors.name", color))
                .where((builder) => builder.whereIn("themes.name", theme))
                .where((builder) => builder.whereIn("designers.name", designer))
                .where((builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        }
        
        else if (color && theme && designer) {
            sets = await Set.query().joinRelated("[colors, themes, designers]")
                .where((builder) => builder.whereIn("colors.name", color))
                .where((builder) => builder.whereIn("themes.name", theme))
                .where((builder) => builder.whereIn("designers.name", designer))
                .groupBy("sets.id")
        } else if (color && designer && vendor) {
            sets = await Set.query().joinRelated("[colors, themes, vendors]")
                .where((builder) => builder.whereIn("colors.name", color))
                .where((builder) => builder.whereIn("themes.name", theme))
                .where((builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        } else if (theme && designer && vendor) {
            sets = await Set.query().joinRelated("[themes, designers, vendors]")
                .where((builder) => builder.whereIn("themes.name", theme))
                .where((builder) => builder.whereIn("designers.name", designer))
                .where((builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        } else if (color && theme && vendor) {
            sets = await Set.query().joinRelated("[colors, themes, vendors]")
                .where((builder) => builder.whereIn("colors.name", color))
                .where((builder) => builder.whereIn("themes.name", theme))
                .where((builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        }
        
        else if (color && theme) {
            sets = await Set.query().joinRelated("[colors, themes]")
                .where( (builder) =>  builder.whereIn("colors.name", color))
                .where( (builder) => builder.whereIn("themes.name", theme))
                .groupBy("sets.id")
        }
        else if (color && designer) {
            sets = await Set.query().joinRelated("[colors, designers]")
                .where( (builder) =>  builder.whereIn("colors.name", color))
                .where( (builder) => builder.whereIn("designers.name", designer))
                .groupBy("sets.id")
        }
        else if (color && vendor) {
            sets = await Set.query().joinRelated("[colors, vendors]")
                .where( (builder) =>  builder.whereIn("colors.name", color))
                .where( (builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        }
        else if (theme && designer) {
            sets = await Set.query().joinRelated("[themes, designers]")
                .where( (builder) =>  builder.whereIn("themes.name", theme))
                .where( (builder) => builder.whereIn("designers.name", designer))
                .groupBy("sets.id")
        }
        else if (theme && vendor) {
            sets = await Set.query().joinRelated("[themes, vendors]")
                .where( (builder) =>  builder.whereIn("themes.name", theme))
                .where( (builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        }
        else if (designer && vendor) {
            sets = await Set.query().joinRelated("[designers, vendors]")
                .where( (builder) =>  builder.whereIn("designers.name", designer))
                .where( (builder) => builder.whereIn("vendors.name", vendor))
                .groupBy("sets.id")
        }
        
        else if (color) {
            sets = await Set.query().joinRelated("colors")
                .where( (builder) =>  builder.whereIn("colors.name", color))
                .groupBy("sets.id")
        } else if (theme) {
            sets = await Set.query().joinRelated("themes")
                .where( (builder) =>  builder.whereIn("themes.name", theme))
        } else if (designer) {
            sets = await Set.query().joinRelated("designers")
                .where((builder) => builder.whereIn("designers.name", designer))
        } else if (vendor) {
            sets = await Set.query().joinRelated("vendors")
                .where((builder) => builder.whereIn("vendors.name", vendor))
        }
        
        else {
            sets = await Set.query()
        }
        
        return sets
    }
}

export default SearchProcessor