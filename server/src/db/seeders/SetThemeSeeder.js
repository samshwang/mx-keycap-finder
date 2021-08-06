import { SetTheme } from "../../models/index.js"

class SetThemeSeeder {
    static async seed() {
        const setThemes = [
            {setID: 1 , themeID: 1},
            {setID: 2 , themeID: 3},
            {setID: 3 , themeID: 2}
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