import fetch from "node-fetch"

class MechMarket {
    constructor(set) {
        this.setName = set;
    }

    getSetNameString() {
        return this.setName.replace(" ", "+")
    }

    async getPosts() {
        const url = `https://www.reddit.com/r/mechmarket/search.json?q="${this.getSetNameString()}"&restrict_sr="true"&sort="new"`

        let postsObjects = []

        const response = await fetch(url)
        const postData = await response.json()
        const postsData = postData.data.children

        postsData.forEach( (post) => {
            if (post.data.link_flair_text === "Selling" && post.data.title.includes(this.setName)) {
                postsObjects.push({
                    title: post.data.title,
                    author: post.data.author,
                    url: post.data.url,
                    createdUNIXepochTime: post.data.created_utc
                })
            }
        })

        return postsObjects
    }

    static getBasePrice(setName, postBodyArray) {
        let index = postBodyArray.indexOf(setName)
        console.log(index)
        for (let i = index; i < postBodyArray.length; i++) {
            console.log(postBodyArray[i])
            if (postBodyArray[i].includes("$")) {
                return postBodyArray[i]
            }
            if (postBodyArray[i].includes(setName)) {
                MechMarket.getBasePrice(setName, postBodyArray.slice(i))
            }
            if (i === postBodyArray.length-1) {
                return "Not Found"
            }
        }
    }
}

const selftext = '~~Shipping included but to CONUS only. Comment and then PM.~~ * ~~Keyboards~~ * [~~Adelie~~](https://imgur.com/a/BvD8FHn) * ~~Blue, 2 PCBs (one new &amp; one desoldered), FR4 plate, Brass plate, Carbon Fiber plate and 2 daughterboards.~~ * ~~Perfect exterior condition. Timestamp of desoldered PCB test in photo gallery.~~ * ~~$850~~ * [~~Forever65~~](https://imgur.com/a/MgiGnzN) * ~~Blue with SS midweight, 2 PCBs (one new &amp; one desoldered), POM 7u plate, Carbon Fiber plate, and 2 daughterboards.~~ * ~~Perfect exterior condition. Timestamp of desoldered PCB test in photo gallery.~~ * ~~$1100~~ * [~~Cajal Space Gray~~](https://imgur.com/a/w7bQP0l) * ~~B stock new and never built. Ortho PCB, ortho brass and POM plates, and ortho foam, original accessories included, and silver knob.~~ * ~~$525~~ * [~~7V Black~~](https://imgur.com/a/utLnGmb) * ~~Black case w. SS weight, Black PVD Badge plus original silver PVD badge, Poly plate, Flex Poly plate (used), and 2 PCBs (1 new and 1 desoldered /tested).~~ * ~~Black case in excellent exterior condition although it has internal anode marks which many of these boards have and also has a super tiny mark near the right blocker (pics in gallery). The weight overall is in good condition but it does have a small ding (see gallery) at the back which is not noticeable. There is a small mark on the bottom. Only calling it out bc I like to be thorough but its pretty damn small (check gallery).~~ * ~~$1100~~ * [~~Unikorn E-white~~](https://imgur.com/a/bPxEuxi) * ~~E-white case with sandblasted SS weight, black aluminum plate (used), brass plate (unused), 2 PCBs (1 new and 1 desoldered), 2 daughterboards, and a 2.25u metal enter key artisan by GodsArmy.~~ * ~~Ewhite case is externally perfect. Desoldered PCB is tested (see gallery)~~ * ~~$1650~~ * [~~Alpine65 Navy~~](https://imgur.com/a/TVEtAdr) * ~~Navy case w/ bottom brass weight, used hotswap PCB (tested), FR4 plate.~~ * ~~Exterior is in great condition with no markings.~~ * ~~$550~~ * [~~ZTBoards After E-White~~](https://imgur.com/a/z31mEwg) * ~~B stock E-white case. Has small patina marks on the internal weight (see pics) and also very light streaks in the E-white finish at the bottom of the case ( included pics but its hard to expose for them as they are pretty faint). Included is a desoldered/tested PCB ( or you can wait for me to ship it later this week and I can give you a new PCB which is on its way for my other black after65), a daughterboard and cable, and black knob.~~ * ~~$685 w. desoldered PCB or can wait for me to ship on Thursday with a new one for $700. New PCBs still available from ZTB.~~ * [~~GMMK Pro White Ice~~](https://imgur.com/a/UwaIIdI) * ~~Silver case with silver and gold knobs all in excellent condition. 2 plates - aluminum (new) and poly (used). O rings, stickers, pullers, usb cable and extra gaskets included.~~ * ~~Hotswap PCB has been tested (see gallery)~~ * ~~$185~~ * [~~Think 6.5 v2 2u Deep Ocean~~](https://imgur.com/a/3sQjtAY) * ~~Deep ocean color with 2u Layout. PCB is mill-maxed w. 7305 sockets and works perfectly (test in gallery). Exterior is perfect. Comes with all original accessories - foam, silicone, tools, etc.~~ * ~~$600~~ * ~~Think 6.5 v2 2u Extras~~ * [~~New PCB~~](https://imgur.com/0QTcdIC) ~~- $65~~ * [~~2u Badges in black and Deep ocean~~](https://imgur.com/QdK9cI9) ~~- $85 for both or $45 each.~~ * [~~Primus WK~~](https://imgur.com/a/HTVALBH) * ~~WK layout. Gray w. SS bottom and Black Mid. This board was not built but I tested the top and bottom on the Navy Primus I have. PCB is new /sealed and comes with Brass plate and all original accessories.~~ * [~~Additional SS photos~~](https://imgur.com/a/V0vrGqB) * ~~$650~~ * [~~Primus WK~~](https://imgur.com/a/JWaLC2C) * ~~WK Layout. Navy top w. Brass bottom and white mid. This board was previously built. Exterior is perfect but there is a rub mark on the inside of the F2-F3 section (see gallery) from unscrewing the bottom weight. Comes with aluminum plate and desoldered /tested PCB. LEDs are correctly soldered onto the PCB already and are at the perfect height.~~ * ~~$575~~ * [~~Primus PCB Extra~~](https://imgur.com/3KpfwEc) * ~~New - $65~~ * ~~Keycaps~~ * [~~GMK Olivia Dark Base + hihihi kit~~](https://imgur.com/a/JNNJci3) * ~~Alphas and spacebar are well used with shine (see gallery).~~ * ~~$190 not splitting at this time~~ * ~~Deskmats~~ * [~~Bolsa Irezumi OG Dragon deskmat~~](https://imgur.com/a/ZfYrUhm) * ~~Used lightly but no marks~~ * ~~$40~~ * [~~Artisans~~](https://imgur.com/a/72iVr0q) * ~~Sirius~~ * ~~Violet Fulfillment $125 (never mounted)~~ * ~~Olivia Fulfillment $125 (never mounted)~~ * ~~Binirias Mumes~~ * ~~Magic Girl Light &amp; Dark Bundle $160 (lightly used - perfect)~~ * ~~Phloxy Mume $45 (lightly used - perfect)~~ * ~~Copper Mume $75 (never mounted - perfect)~~ * ~~Winkeys Goobear~~ * ~~Over Easy - $75 (never mounted)~~ * ~~RAMAs~~ * ~~First Love - $135 (used w. small rub marks at the bottom - see gallery)~~ * ~~Masterpiece "Master" brass artisan - $110 (used and has a small nick - see gallery)~~ * ~~Aurora Keyby fulfillment - $85 (new)~~ * ~~Other~~ * ~~THOK Stachio in Gold - $60 ( lightly used - perfect)~~ * ~~THOK ePBT Grand Tour "Saturno" - $95 (new)~~ * ~~Key of Fate WSAD "death" resin caps - $65 (test mounted because they are usually tight. Already used warm water to "fit" them. Stems are perfect but always check before force mounting them)~~'
const selftextArray = selftext.split(" ")

// console.log( MechMarket.getBasePrice("GMK Olivia", selftextArray) )

export default MechMarket

// const test = new MechMarket("sa copper")
// const data = await test.getPosts()
// console.log(data)
