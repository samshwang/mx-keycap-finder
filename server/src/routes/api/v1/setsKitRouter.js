import express from "express"

import { Kit } from "../../../models/index.js"

const setsKitRouter = new express.Router({ mergeParams: true })

setsKitRouter.post("/", async (req, res) => {
    const setID = req.params.id
    const { name, price, imageURL } = req.body
    try {
        await Kit.query().insert({name: name, price: price, imageURLpath: imageURL, setID: setID})
        return res.status(201).json({})
    } catch (error) {
        return res.status(500).json({error})
    }
})

export default setsKitRouter
