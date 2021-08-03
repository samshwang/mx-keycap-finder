import { Set } from "../../models/index.js"

class SetSeeder {
    static async seed() {
        const sets = [
            {name: "GMK Olivia", profile: "Cherry", designer: "olivia", vendor: "NovelKeys", releaseDate: "2018-03-28", salesFormat: "Group Buy", round: 1, status: "Complete", imageURLpath: "https://i.imgur.com/2Tb509n.jpg", link: "https://geekhack.org/index.php?topic=94903.msg2584597#msg2584597"},
            {name: "SA Copper", profile: "SA", designer: "fatboycarney", vendor: "Mechs & Co", releaseDate: "2021-05-28", salesFormat: "Group Buy", round: 1, status: "Manufacturing", imageURLpath: "https://i.imgur.com/0UC2SZu.jpg", link: "https://geekhack.org/index.php?topic=113048.msg3053373#msg3053373"},
            {name: "KAT Mizu", profile: "KAT", designer: "Rensuya", vendor: "Cannonkeys", releaseDate: "2020-09-01", salesFormat: "Group Buy", round: 1, status: "Manufacturing", imageURLpath: "https://i.imgur.com/dQxy0Yl.png", link: "https://www.reddit.com/r/MechanicalKeyboards/comments/i6a93y/kat_mizu_coming_september_1st/"},
        ]

        for (const set of sets) {
            const currentSet = await Set.query().findOne({name: set.name, round: set.round})

            if (!currentSet) {
                await Set.query().insert(set)
            }
        }
    }
}

export default SetSeeder