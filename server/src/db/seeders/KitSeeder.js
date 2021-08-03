import { Kit } from "../../models/index.js"

class KitSeeder {
    static async seed() {
        const kits = [
            {name: "Base", price: 140, setID: 1, imageURLpath: "https://i.imgur.com/5aQ52BJ.jpg"},
            {name: "Extras", price: 35, setID: 1, imageURLpath: "https://i.imgur.com/XmLA9oY.jpg"},

            {name: "Alphas", price: 40, setID: 2, imageURLpath: "https://i.imgur.com/Z9cbxqj.jpg"},
            {name: "TKL", price: 80, setID: 2, imageURLpath: "https://i.imgur.com/Q1YcDSS.jpg"},
            {name: "Novelties", price: 40, setID: 2, imageURLpath: "https://i.imgur.com/R2UkRYH.jpg"},
            {name: "Numpad", price: 35, setID: 2, imageURLpath: "https://i.imgur.com/97lXVvu.jpg"},
            {name: "Orthos/40s", price: 80, setID: 2, imageURLpath: "https://i.imgur.com/qi8kqGA.jpg"},
            {name: "Spaces", price: 25, setID: 2, imageURLpath: "https://i.imgur.com/3dGMojl.jpg"},
            {name: "ISO", price: 27, setID: 2, imageURLpath: "https://i.imgur.com/DYUFV6J.jpg"},
            {name: "Norde", price: 40, setID: 2, imageURLpath: "https://i.imgur.com/dOE9qnO.jpg"},

            {name: "Alphas (Full Moon)", price: 29, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/FullMoonAlphas_540x.png?v=1600142829"},
            {name: "60/TKL Mods (Full Moon)", price: 60, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/FullMoonMods_540x.png?v=1600142829"},
            {name: "40s Mods (Full Moon)", price: 46, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/40sFullMoon_540x.png?v=1600142829"},
            {name: "Ortho Mods (Full Moon)", price: 30, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/OrthoFullMoon_540x.png?v=1600142829"},
            {name: "Ergo Mods (Full Moon)", price: 55, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/Ergo2_540x.png?v=1600142829"},
            {name: "Numpad (Full Moon)", price: 20, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/Numpad_cf99b17d-8849-4633-89ab-c7578586e47b_360x.png?v=1600142829"},
            {name: "Spacebars (Full Moon)", price: 26, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/Spacebars_60bfa86d-fa21-437c-a7a2-7554403fc726_540x.png?v=1600142829"},
            {name: "Novelties (Full Moon)", price: 30, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/NoveltiesFullMoon_540x.png?v=1600142829"},
            {name: "Accents", price: 22, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/Accents_540x.png?v=1600142829"},
            {name: "Colevrak+", price: 25, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/Colevrak_d1022cde-5a0f-4785-b955-9ed16d040b78_540x.png?v=1600142829"},
            {name: "ISO", price: 20, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/ISO_d0dc05d9-e570-4373-9ff5-ff914b7ed29a_540x.png?v=1600142829"},
            {name: "Glow RAMA", price: 42, setID: 3, imageURLpath: "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/RW-KAT-MIZU-R2_540x.png?v=1600142829"},
        ]

        for (const kit of kits) {
            const currentKit = await Kit.query().findOne({name: kit.name})

            if (!currentKit) {
                await Kit.query().insert(kit)
            }
        }
    }
}

export default KitSeeder