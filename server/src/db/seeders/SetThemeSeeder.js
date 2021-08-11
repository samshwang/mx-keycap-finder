import { SetTheme } from "../../models/index.js"

class SetThemeSeeder {
    static async seed() {
        const setThemes = [
            {setID: 1 , themeID: 1},

            {setID: 2 , themeID: 3},

            {setID: 3 , themeID: 2},

            {setID: 4 , themeID: 4},
            {setID: 4 , themeID: 5},
            {setID: 4 , themeID: 6},
            {setID: 4 , themeID: 7},

            {setID: 5 , themeID: 8},
            {setID: 5 , themeID: 9},
            {setID: 5 , themeID: 10},
            {setID: 5 , themeID: 11},
            {setID: 5 , themeID: 12},
            {setID: 5 , themeID: 13},

            {setID: 6 , themeID: 14},

            {setID: 7 , themeID: 9},
            {setID: 7 , themeID: 10},
            {setID: 7 , themeID: 11},
            {setID: 7 , themeID: 12},
            {setID: 7 , themeID: 13},
            {setID: 7 , themeID: 15},

            {setID: 8 , themeID: 16},
            {setID: 8 , themeID: 17},
            {setID: 8 , themeID: 18},
        ]

        for (const setTheme of setThemes) {
            const currentSetTheme = await SetTheme.query().findOne({setID: setTheme.setID, themeID: setTheme.themeID})

            if (!currentSetTheme) {
                await SetTheme.query().insert(setTheme)
            }
        }
    }
}

export default SetThemeSeeder