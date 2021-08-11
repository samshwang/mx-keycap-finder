import express from "express"

import { Set } from "../../../models/index.js"
import MechMarket from "../../../api/MechMarket.js"

const setsMechMarketRouter = new express.Router({ mergeParams: true })

setsMechMarketRouter.get("/", async (req, res) => {
    const setID = req.params.id
    try {
        const set = await Set.query().findById(setID)
        const setName = set.name
        const targetSet = new MechMarket(setName)
        const posts = await targetSet.getPosts()
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).json({error})
    }
})

export default setsMechMarketRouter