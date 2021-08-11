import { SetColorway } from "../../models/index.js"

class SetColorwaySeeder {
    static async seed() {
        const setColorways = [
            {setID: 1 , colorID: 1},
            {setID: 1 , colorID: 7},
            {setID: 1 , colorID: 2},

            {setID: 2 , colorID: 10},
            {setID: 2 , colorID: 11},

            {setID: 3 , colorID: 10},
            {setID: 3 , colorID: 2},

            {setID: 4 , colorID: 2},
            {setID: 4 , colorID: 8},

            {setID: 5 , colorID: 2},
            {setID: 5 , colorID: 3},
            {setID: 5 , colorID: 8},
            {setID: 5 , colorID: 4},
            {setID: 5 , colorID: 5},
            {setID: 5 , colorID: 10},

            {setID: 6 , colorID: 12},
            {setID: 6 , colorID: 2},
            {setID: 6 , colorID: 8},
            {setID: 6 , colorID: 3},

            {setID: 7 , colorID: 3},
            {setID: 7 , colorID: 2},

            {setID: 8 , colorID: 5},
            {setID: 8 , colorID: 2},
        ]

        for (const setColorway of setColorways) {
            const currentSetColorway = await SetColorway.query().findOne({setID: setColorway.setID, colorID: setColorway.colorID})

            if (!currentSetColorway) {
                await SetColorway.query().insert(setColorway)
            }
        }
    }
}

export default SetColorwaySeeder