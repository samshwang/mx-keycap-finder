import React, { useState, useEffect } from "react";

import SetShowTile from "./SetShowTile.js"

const SetIndexPage = (prop) => {
    const [getSets, setSets] = useState([])

    const fetchSets = async () => {
        try {
            const response = await fetch("/api/v1/sets")
            if (!response.ok) {
                const errorMessage = `${response.status}: (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            } else {
                const sets = await response.json()
                setSets(sets.sets)
            }
        } catch (errors) {
            console.log(`Error in Fetch: ${errors.message}`)
        }
    }

    useEffect( () => {
        fetchSets()
    }, [])

    const setList = getSets.map( set => {
        return (
            <SetShowTile key={set.id} set={set} />
        )
    })

    return (
        <div>
            {setList}
        </div>
    )
}

export default SetIndexPage