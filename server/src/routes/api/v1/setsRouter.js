import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Set, SetColorway, SetDesigner, SetTheme } from "../../../models/index.js"
import SearchProcessor from "../../../services/SearchProcessor.js"
import PostProcessor from "../../../services/PostProcessor.js"
import EditProcessor from "../../../services/EditProcessor.js"
import setsMechMarketRouter from "./setsMechMarketRouter.js"

const setsRouter = new express.Router()

setsRouter.use("/:id/mechmarket", setsMechMarketRouter)

setsRouter.get("/", async (req, res) => {
    const { colors, themes, designers } = req.query
    const queryObject = SearchProcessor.arrayifyObject({colors: colors, themes: themes, designers: designers})
    try {
        const sets = await SearchProcessor.databaseQuery(queryObject)
        return res.status(200).json({sets})
    } catch (error) {
        return res.status(500).json({error})
    }
})

setsRouter.get("/:id", async (req, res) => {
    const setID = req.params.id
    try {
        const set = await Set.query().findById(setID)
        set.kits = await set.$relatedQuery("kits")

        set.designer = await set.$relatedQuery("designers")
        set.color = await set.$relatedQuery("colors")
        set.theme = await set.$relatedQuery("themes")

        //adding vendor data
        const vendor_na = await set.$relatedQuery("vendor_na")
        const vendor_eu = await set.$relatedQuery("vendor_eu")
        const vendor_usa = await set.$relatedQuery("vendor_usa")
        const vendor_canada = await set.$relatedQuery("vendor_canada")
        const vendor_uk = await set.$relatedQuery("vendor_uk")
        const vendor_australia = await set.$relatedQuery("vendor_australia")
        const vendor_oceana = await set.$relatedQuery("vendor_oceana")
        const vendor_singapore = await set.$relatedQuery("vendor_singapore")
        const vendor_korea = await set.$relatedQuery("vendor_korea")
        const vendor_china = await set.$relatedQuery("vendor_china")
        const vendor_asia = await set.$relatedQuery("vendor_asia")
        const vendor_sea = await set.$relatedQuery("vendor_sea")
        const vendor_latam = await set.$relatedQuery("vendor_latam")
        const vendor_philippines = await set.$relatedQuery("vendor_philippines")

        let vendors = {
            vendor_na: {vendor: vendor_na, region: "NA"},
            vendor_eu: {vendor: vendor_eu, region: "EU"},
            vendor_usa: {vendor: vendor_usa, region: "USA"},
            vendor_canada: {vendor: vendor_canada, region: "Canada"},
            vendor_uk: {vendor: vendor_uk, region: "UK"},
            vendor_australia: {vendor: vendor_australia, region: "Australia"},
            vendor_oceana: {vendor: vendor_oceana, region: "Oceana"},
            vendor_singapore: {vendor: vendor_singapore, region: "Singapore"},
            vendor_korea: {vendor: vendor_korea, region: "Korea"},
            vendor_china: {vendor: vendor_china, region: "China"},
            vendor_asia: {vendor: vendor_asia, region: "Asia"},
            vendor_sea: {vendor: vendor_sea, region: "SEA"},
            vendor_latam: {vendor: vendor_latam, region: "LATAM"},
            vendor_philippines: {vendor: vendor_philippines, region: "Philippines"},
        }

        set.vendors = vendors

        return res.status(200).json({set})
    } catch (error) {
        return res.status(500).json({error})
    }
})

setsRouter.post("/new", async (req, res) => {
    try {
        const incomingSet = await PostProcessor.postSet(req.body)
        console.log(incomingSet)
        return res.status(201).json({set: incomingSet})
    } catch (error) {
        if(error instanceof ValidationError) {
            return res.status(422).json({ error: error.data })
        }
        return res.status(500).json(error)
    }
})

setsRouter.delete("/:id", async (req, res) => {
    const setID = req.params.id
    try {
        const set = await Set.query().deleteById(setID)
        return res.status(200).json({set})
    } catch (error) {
    return res.status(500).json({ error })
    }
})

setsRouter.patch("/edit/:id", async (req, res) => {
    const setID = req.params.id
    const { name, profile, imageURLpath, link, releaseDate, salesFormat, round, status } = req.body
    const { designer, color, theme, vendor } = req.body

    try {
        const set = await Set.query().findById(setID)
        const edittedSet = await Set.query().updateAndFetchById(setID, {
            name: name,
            profile: profile,
            imageURLpath: imageURLpath,
            link: link,
            releaseDate: releaseDate,
            salesFormat: salesFormat,
            round: round,
            status: status
        })

        //designers
        await SetDesigner.query().delete().where("setID", setID)
        await EditProcessor.processDesigners(designer, setID)

        //colors
        await SetColorway.query().delete().where("setID", setID)
        await EditProcessor.processColors(color, setID)

        //themes
        await SetTheme.query().delete().where("setID", setID)
        await EditProcessor.processThemes(theme, setID)

        return res.status(200).json({ edittedSet })
    } catch (error) {
        return res.status(500).json({ error })
    }
})

export default setsRouter
