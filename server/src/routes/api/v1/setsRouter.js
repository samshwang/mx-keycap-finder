import express from "express"

import { Set } from "../../../models/index.js"

const setsRouter = new express.Router()

setsRouter.get("/", async (req, res) => {
    try {
        const sets = await Set.query()
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