import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"

import KitTile from "./KitTile.js"

const SetShowPage = (props) => {
    const [getSet, setSet] = useState({
        kits: [],
        USvendor: {},
    })
    const [shouldRedirectToIndex, setShouldRedirectToIndex] = useState(false)
    const [shouldRedirectToEditForm, setShouldRedirectToEditForm] = useState(false)

    const { id } = useParams()

    const fetchSet = async () => {
        try {
            const response = await fetch(`/api/v1/sets/${id}`)
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

    let salesInformation = (
        <p>
            <strong>Profile:</strong> {getSet.profile} <br/>
            <strong>Sales Format:</strong> {getSet.salesFormat} <br/>
            <strong>Release Date:</strong> {releaseDate} <br/>
            <strong>Status:</strong> {getSet.status} <br/>
        </p>
    )
    if (getSet.USvendor) {
        salesInformation = (
            <p>
                <strong>Profile:</strong> {getSet.profile} <br/>
                <strong>Sales Format:</strong> {getSet.salesFormat} <br/>
                <strong>US Vendor:</strong> <a href={getSet.USvendor.url}>{getSet.USvendor.name}</a>  <br/>
                <strong>Release Date:</strong> {releaseDate} <br/>
                <strong>Status:</strong> {getSet.status} <br/>
            </p>
        )
    }

    const editSet = (event) => {
        setShouldRedirectToEditForm(true)
    }

    const deleteSet = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`/api/v1/sets/${id}`, {
                method: "DELETE"
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            setShouldRedirectToIndex(true)
        } catch(error) {
            console.error(`Error in Fetch: ${error.message}`)
        }
    }

    let adminOptions
    if (props.currentUser && props.currentUser.administrator === true) {
        adminOptions = (
            <div>
                <button className="adminOptionsEdit" onClick={editSet}>
                    Edit Details
                </button>
                <button className="adminOptionsDelete" onClick={deleteSet}>
                    Delete Keycap Set
                </button>
            </div>
        )
    }

    if(shouldRedirectToIndex) {
        return (<Redirect push to="/" />)
    }

    const editFormURL = `/edit/${id}`
    if(shouldRedirectToEditForm) {
        return (<Redirect push to={editFormURL} />)
    }
    
    const releaseDate = new Date(getSet.releaseDate).toLocaleDateString("en-US")

    return (
        <div className="showPage">
            <h2><strong>{getSet.name}</strong></h2>
            <p>by {getSet.designer}</p>
            <div className="showPageImage">
                <img src={getSet.imageURLpath} alt="{getSet.name} display" />
            </div>
            {salesInformation}
            <h3><strong>Kits:</strong></h3>
            {kits}
            {adminOptions}
        </div>
    )
}

export default SetShowPage