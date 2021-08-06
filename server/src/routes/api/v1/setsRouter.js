import express from "express"

import { Color, Set, Theme } from "../../../models/index.js"
import SearchProcessor from "../../../services/SearchProcessor.js"

const setsRouter = new express.Router()

setsRouter.get("/", async (req, res) => {
    const { color, theme, designer, vendor } = req.query
    console.log(req.query)

    const queryObject = SearchProcessor.arrayifyObject({color: color, theme: theme, designer: designer, vendor: vendor})
    console.log(queryObject)

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
        return res.status(200).json({set})
    } catch (error) {
        return res.status(500).json({error})
    }
})

export default setsRouter