import express from "express"

import { Set } from "../../../models/index.js"

const setsRouter = new express.Router()

setsRouter.get("/", async (req, res) => {
    try {
        const sets = await Set.query()
        return res.status(200).json({sets})
    } catch (errors) {
        return res.status(500).json({errors})
    }
})

export default setsRouter