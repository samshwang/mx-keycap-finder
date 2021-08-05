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
            {setID: 3 , colorID: 2}
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