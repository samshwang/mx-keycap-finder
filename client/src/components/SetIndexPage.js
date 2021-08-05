import React, { useState, useEffect } from "react"

import SetTile from "./SetTile.js"
import SearchForm from "./SearchForm.js"

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
        } catch (error) {
            console.log(`Error in Fetch: ${error.message}`)
        }
    }

    useEffect( () => {
        fetchSets()
    }, [])

    const setList = getSets.map( set => {
        return (
            <SetTile key={set.id} set={set} />
        )
    })

    return (
        <div className="indexPage">
            <div className="search">
                <SearchForm setSets={setSets}/>
            </div>
            <div>
                {setList}
            </div>
        </div>
    )
}

export default SetIndexPage