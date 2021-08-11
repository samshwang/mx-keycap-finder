import { Color } from "../../models/index.js"

class ColorSeeder {
    static async seed() {
        const colors = [
            {name: "black"}, //1
            {name: "white"}, //2
            {name: "gray"}, //3
            {name: "yellow"}, //4
            {name: "red"}, //5
            {name: "orange"}, //6
            {name: "pink"},  //7
            {name: "green"}, //8
            {name: "purple"}, //9
            {name: "blue"}, //10
            {name: "brown"}, //11
            {name: "beige"}, //12
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