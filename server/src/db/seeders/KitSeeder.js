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

            {name: "Jungle", price: 119.99, setID: 4, imageURLpath: "https://geekhack.org/index.php?action=dlattach;topic=104954.0;attach=237027;image"},
            {name: "Bamboo", price: 24.99, setID: 4, imageURLpath: "https://geekhack.org/index.php?action=dlattach;topic=104954.0;attach=237029;image"},
            {name: "Succulents", price: 34.99, setID: 4, imageURLpath: "https://geekhack.org/index.php?action=dlattach;topic=104954.0;attach=237031;image"},

            {name: "Oblivion Alphas", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/mfa6e2A.jpg"},
            {name: "Hagoromo Alphas", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/BpMi4A8.jpg"},
            {name: "ASCII Alphas", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/4ZeqqvU.jpg"},
            {name: "Hagoromo ASCII Alphas", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/fwcOMms.jpg"},
            {name: "Git Modifiers", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/ytGIe8E.jpg"},
            {name: "Oblivion Modifiers", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/5jVfG58.jpg"},
            {name: "Monochrome Modifiers", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/g8nPLHE.jpg"},
            {name: "Oblivion Numpad", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/4GLKUzU.jpg"},
            {name: "Hagoromo Numpad", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/0xurEgs.jpg"},
            {name: "Assembly", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/wWiNLle.jpg"},
            {name: "40bit", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/HYVAKNP.jpg"},
            {name: "ergo.dox", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/2ZNlDnJ.jpg"},
            {name: "Alternate Function Colors", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/qihhUxF.jpg"},
            {name: "Arrows", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/PqTz3rv.jpg"},
            {name: "7u Spacebars", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/phCjL1l.jpg"},
            {name: "Spacekeys", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/ZCNeOds.jpg"},
            {name: "Vim", price: 34.99, setID: 5, imageURLpath: "https://i.imgur.com/pRGc7Fl.jpg"},

            {name: "Base", price: 125, setID: 6, imageURLpath: "https://i.imgur.com/SKORahi.png"},
            {name: "40s", price: 25, setID: 6, imageURLpath: "https://i.imgur.com/hThRhGR.png"},
            {name: "Spacebars", price: 45, setID: 6, imageURLpath: "https://i.imgur.com/qJUdHma.png"},

            {name: "Base", price: 130, setID: 7, imageURLpath: "https://i.imgur.com/I8Lw8iL.png"},
            {name: "Icon Modifiers", price: 30, setID: 7, imageURLpath: "https://i.imgur.com/I45VYQd.png"},
            {name: "40bit", price: 50, setID: 7, imageURLpath: "https://i.imgur.com/1yRVAz7.png"},
            {name: "Spacebars and -Keys", price: 20, setID: 7, imageURLpath: "https://i.imgur.com/b4mPX8j.png"},

            {name: "Base Kit", price: 115, setID: 8, imageURLpath: "https://i.imgur.com/zIZI86J.png"},
            {name: "Symbols", price: 38, setID: 8, imageURLpath: "https://i.imgur.com/FERhA3u.png"},
            {name: "Spacebars and -Keys", price: 18, setID: 8, imageURLpath: "https://i.imgur.com/ODxObUn.png"},
        ]

        for (const kit of kits) {
            const currentKit = await Kit.query().findOne({name: kit.name, setID: kit.setID})

            if (!currentKit) {
                await Kit.query().insert(kit)
            }
        }
    }
}

export default KitSeeder