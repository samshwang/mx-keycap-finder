import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Set } from "../../../models/index.js"
import SearchProcessor from "../../../services/SearchProcessor.js"

const setsRouter = new express.Router()

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
        return res.status(200).json({set})
    } catch (error) {
        return res.status(500).json({error})
    }
})

setsRouter.post("/new", async (req, res) => {
    try {
        const incomingSet = req.body
        const newSet = await Set.query().insertAndFetch(incomingSet)
        return res.status(201).json({set: newSet})
    } catch (error) {
        if(error instanceof ValidationError) {
            return res.status(422).json({ error: error.data })
        }
        return res.status(500).json(error)
    }
})

export default setsRouter