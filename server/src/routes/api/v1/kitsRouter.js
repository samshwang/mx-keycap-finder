import express from "express"

import { Kit } from "../../../models/index.js"

const kitsRouter = new express.Router()

kitsRouter.delete("/:id", async (req, res) => {
    const kitID = req.params.id
    try {
        await Kit.query().deleteById(kitID)
        return res.status(200).json()
    } catch (error) {
        return res.status(500).json({error})
    }
})

export default kitsRouter
