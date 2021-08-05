import { Color } from "../../models/index.js"

class ColorSeeder {
    static async seed() {
        const colors = [
            {name: "black"},
            {name: "white"},
            {name: "gray"},
            {name: "yellow"},
            {name: "red"},
            {name: "orange"},
            {name: "pink"},
            {name: "green"},
            {name: "purple"},
            {name: "blue"},
            {name: "brown"}
        ]

        for (const color of colors) {
            const currentColor = await Color.query().findOne({name: color.name})

            if (!currentColor) {
                await Color.query().insert(color)
            }
        }
    }
}

export default ColorSeeder