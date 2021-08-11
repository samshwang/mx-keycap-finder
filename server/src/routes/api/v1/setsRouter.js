import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Set } from "../../../models/index.js"
import SearchProcessor from "../../../services/SearchProcessor.js"
import setsMechMarketRouter from "./setsMechMarketRouter.js"

const setsRouter = new express.Router()

setsRouter.use("/:id/mechmarket", setsMechMarketRouter)

setsRouter.get("/", async (req, res) => {
    const { color, theme, designer, vendor } = req.query
    const queryObject = SearchProcessor.arrayifyObject({color: color, theme: theme, designer: designer, vendor: vendor})
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
        console.log(designers)
        if (designers[0]) {
            set.designer = designers[0].name
        }
        return res.status(200).json({set})
    } catch (error) {
        return res.status(500).json({error})
    }
})

setsRouter.post("/new", async (req, res) => {
    const incomingSet = req.body
    try {
        const newSet = await Set.query().insertAndFetch(incomingSet)
        return res.status(201).json({set: newSet})
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