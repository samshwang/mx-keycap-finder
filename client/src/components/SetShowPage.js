import React, { useState, useEffect } from "react"

import KitTile from "./KitTile.js"

const SetShowPage = (props) => {
    const [getSet, setSet] = useState({kits: []})

    const setID = props.match.params.id

    const fetchSet = async () => {
        try {
            const response = await fetch(`/api/v1/sets/${setID}`)
            if (!response.ok) {
                const errorMessage = `${response.status}: (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            } else {
                const set = await response.json()
                setSet(set.set)
            }
        } catch (error) {
            console.log(`Error in Fetch: ${error.message}`)
        }
    }

    useEffect( () => {
        fetchSet()
    }, [])

    const kits = getSet.kits.map( kit => {
        return (
            <KitTile key={kit.id} kit={kit}/>
        )
    })

    const releaseDate = new Date(getSet.releaseDate).toLocaleDateString("en-US")

    return (
        <div className="showPage">
            <h2><strong>{getSet.name}</strong></h2>
            <p>by {getSet.designer}</p>
            <div className="showPageImage">
                <img src={getSet.imageURLpath} alt="{getSet.name} display" />
            </div>
            <p>
                <strong>Profile:</strong> {getSet.profile} <br/>
                <strong>Sales Format:</strong> {getSet.salesFormat} <br/>
                <strong>US Vendor:</strong> {getSet.vendor} <br/>
                <strong>Release Date:</strong> {releaseDate} <br/>
                <strong>Status:</strong> {getSet.status} <br/>
            </p>
            <h3><strong>Kits:</strong></h3>
            {kits}
        </div>
    )
}

export default SetShowPage