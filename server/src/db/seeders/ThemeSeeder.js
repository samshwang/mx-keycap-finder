import { Theme } from "../../models/index.js"

class ThemeSeeder {
    static async seed() {
        const themes = [
            {name: "rose gold"}, //1
            {name: "water"}, //2
            {name: "copper"}, //3
            {name: "plant"}, //4
            {name: "plants"},
            {name: "jungle"},
            {name: "succulents"},
            {name: "git"}, //8
            {name: "vim"},
            {name: "code"}, //9
            {name: "coding"},
            {name: "programming"},
            {name: "ascii"}, //13
            {name: "olive"}, //14
            {name: "halleffect"}, //15
            {name: "crimson"}, //16
            {name: "cadet"},
            {name: "space"}, //18
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