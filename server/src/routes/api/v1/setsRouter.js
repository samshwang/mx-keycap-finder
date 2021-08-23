import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Set } from "../../../models/index.js"
import SearchProcessor from "../../../services/SearchProcessor.js"
import PostProcessor from "../../../services/PostProcessor.js"
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
        const vendors = await set.$relatedQuery("vendors")
        set.USvendor = vendors[0]
        const designers = await set.$relatedQuery("designers")
        set.designer = designers
        const colors = await set.$relatedQuery("colors")
        set.color = colors
        const themes = await set.$relatedQuery("themes")
        set.theme = themes
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
    const edits = req.body
    try {
        const set = await Set.query().findById(setID)
        const edittedSet = await Set.query().updateAndFetchById(setID, {
            name: edits.name,
            profile: edits.profile,
            imageURLpath: edits.imageURLpath,
            link: edits.link,
            releaseDate: edits.releaseDate,
            salesFormat: edits.salesFormat,
            round: edits.round,
            status: edits.status
        })
        return res.status(200).json({ edittedSet })
    } catch (error) {
        return res.status(500).json({ error })
    }
})

export default setsRouter
