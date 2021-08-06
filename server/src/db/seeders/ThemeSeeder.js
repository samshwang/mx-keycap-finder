import { Theme } from "../../models/index.js"

class ThemeSeeder {
    static async seed() {
        const themes = [
            {name: "rose gold"},
            {name: "water"},
            {name: "copper"},
        ]

        for (const theme of themes) {
            const currentTheme = await Theme.query().findOne({name: theme.name})

            if (!currentTheme) {
                await Theme.query().insert(theme)
            }
        }
    }
}

export default ThemeSeeder