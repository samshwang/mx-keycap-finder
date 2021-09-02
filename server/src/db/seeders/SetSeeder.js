import { Set } from "../../models/index.js"

class SetSeeder {
    static async seed() {
        const sets = [
            {
                name: "GMK Olivia",
                profile: "Cherry",
                releaseDate: "2018-03-28",
                salesFormat: "Group Buy",
                round: "1",
                vendor_na_ID: 1,
                vendor_eu_ID: 7,
                vendor_sea_ID: 8,
                vendor_china_ID: 9,
                vendor_asia_ID: 9,
                status: "Complete",
                imageURLpath: "https://i.imgur.com/2Tb509n.jpg",
                link: "https://geekhack.org/index.php?topic=94903.msg2584597#msg2584597"
            },
            {
                name: "SA Copper",
                profile: "SA",
                releaseDate: "2021-05-28",
                salesFormat: "Group Buy",
                round: "1",
                vendor_usa_ID: 2,
                vendor_canada_ID: 10,
                vendor_eu_ID: 11,
                vendor_uk_ID: 12,
                vendor_china_ID: 9,
                vendor_oceana_ID: 13,
                vendor_latam_ID: 14,
                vendor_sea_ID: 15,
                vendor_philippines_ID: 16,
                status: "Manufacturing",
                imageURLpath: "https://i.imgur.com/0UC2SZu.jpg",
                link: "https://geekhack.org/index.php?topic=113048.msg3053373#msg3053373"
            },
            {
                name: "KAT Mizu",
                profile: "KAT",
                releaseDate: "2020-09-01",
                salesFormat: "Group Buy",
                round: "1",
                vendor_usa_ID: 3,
                vendor_eu_ID: 11,
                vendor_oceana_ID: 13,
                vendor_asia_ID: 9,
                vendor_canada_ID: 10,
                status: "Manufacturing",
                imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/KAT_Mizu_Chimera_2020-Aug-08_03-02-06AM-000_CustomizedView13519984784_540x.png?v=1600142829",
                link: "https://www.reddit.com/r/MechanicalKeyboards/comments/i6a93y/kat_mizu_coming_september_1st/"
            },
            {
                name: "GMK Botanical",
                profile: "Cherry",
                releaseDate: "2020-03-03",
                salesFormat: "Group Buy",
                round: "1",
                vendor_na_ID: 4,
                vendor_australia_ID: 13,
                vendor_eu_ID: 11,
                vendor_sea_ID: 15,
                status: "Fulfilled",
                imageURLpath: "https://geekhack.org/index.php?action=dlattach;topic=104954.0;attach=237043;image",
                link: "https://geekhack.org/index.php?topic=104954.0"
            },
            {
                name: "SA Oblivion",
                profile: "SA",
                releaseDate: "2020-08-03",
                salesFormat: "Group Buy",
                round: "V2",
                vendor_international_ID: 5,
                status: "Fulfilled",
                imageURLpath: "https://i.imgur.com/NujxZT9.jpg",
                link: "https://geekhack.org/index.php?topic=107884.0"
            },
            {
                name: "GMK Olive",
                profile: "Cherry",
                releaseDate: "2019-06-19",
                salesFormat: "Group Buy",
                round: "1",
                vendor_na_ID: 1,
                vendor_eu_ID: 11,
                vendor_australia_ID: 13,
                vendor_singapore_ID: 15,
                vendor_china_ID: 9,
                status: "Fulfilled",
                imageURLpath: "https://i.imgur.com/wF2WGb3.png",
                link: "https://geekhack.org/index.php?topic=100983.0"
            },
            {
                name: "GMK ASCII",
                profile: "Cherry",
                releaseDate: "2019-11-19",
                salesFormat: "Group Buy",
                round: "1",
                vendor_usa_ID: 6,
                vendor_eu_ID: 11,
                vendor_china_ID: 9,
                vendor_asia_ID: 9,
                vendor_australia_ID: 13,
                status: "Fulfilled",
                imageURLpath: "https://i.imgur.com/OPGknlW.png",
                link: "https://geekhack.org/index.php?topic=103218.0"
            },
            {
                name: "GMK Crimon Cadet",
                profile: "Cherry",
                releaseDate: "2019-09-16",
                salesFormat: "Group Buy",
                round: "1",
                vendor_na_ID: 1,
                vendor_eu_ID: 11,
                vendor_china_ID: 9,
                vendor_asia_ID: 9,
                vendor_oceana_ID: 13,
                status: "Fulfilled",
                imageURLpath: "https://i.imgur.com/LUaPGgl.png",
                link: "https://geekhack.org/index.php?topic=102510.0"
            },
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
