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

        const vendor_na = await set.$relatedQuery("vendor_na")
        const vendor_eu = await set.$relatedQuery("vendor_eu")


        let vendors = {
            vendor_na: vendor_na,
            vendor_eu: vendor_eu
        }

        set.vendors = vendors

        // set.vendor_na = await set.$relatedQuery("vendor_na")
        // set.vendor_eu = await set.$relatedQuery("vendor_eu")
        // set.vendor_usa = await set.$relatedQuery("vendor_usa")
        // set.vendor_canada = await set.$relatedQuery("vendor_canada")
        // set.vendor_uk = await set.$relatedQuery("vendor_uk")
        // set.vendor_australia = await set.$relatedQuery("vendor_australia")
        // set.vendor_oceana = await set.$relatedQuery("vendor_oceana")
        // set.vendor_singapore = await set.$relatedQuery("vendor_singapore")
        // set.vendor_korea = await set.$relatedQuery("vendor_korea")
        // set.vendor_china = await set.$relatedQuery("vendor_china")
        // set.vendor_asia = await set.$relatedQuery("vendor_asia")
        // set.vendor_sea = await set.$relatedQuery("vendor_sea")
        // set.vendor_latam = await set.$relatedQuery("vendor_latam")
        // set.vendor_philippines = await set.$relatedQuery("vendor_philippines")

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
