import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"

import AttributesToString from "../services/AttributesToString.js"
import MechMarketShowPage from "./MechMarketShowPage.js"
import KitTile from "./KitTile.js"

const SetShowPage = (props) => {
    const [getSet, setSet] = useState({
        kits: [],
    })
    const [shouldRedirectToIndex, setShouldRedirectToIndex] = useState(false)
    const [shouldRedirectToEditForm, setShouldRedirectToEditForm] = useState(false)
    const [shouldRedirectToNewKitForm, setshouldRedirectToNewKitForm] = useState(false)

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

    let designers
    if (getSet.designer) {
        designers = AttributesToString.designersToString(getSet.designer)
    }

    let colors
    if (getSet.color) {
        colors = AttributesToString.colorsToString(getSet.color)
    }

    let themes
    if (getSet.theme) {
        themes = AttributesToString.colorsToString(getSet.theme)
    }

    const releaseDate = new Date(getSet.releaseDate).toLocaleDateString("en-US")

    const setDetails = (
        <p>
            <strong>Colors:</strong> {colors} <br/>
            <strong>Themes:</strong> {themes} <br/>
            <strong>Profile:</strong> {getSet.profile} <br/>
            <strong>Sales Format:</strong> {getSet.salesFormat} <br/>
            <strong>Release Date:</strong> {releaseDate} <br/>
            <strong>Status:</strong> {getSet.status} <br/>
        </p>
    )

    let vendorDetails
    let vendorKey = -1
    if (getSet.vendors) {
        vendorDetails = Object.values(getSet.vendors).map( vendor => {
            if (vendor.vendor) {
                vendorKey++
                return (
                    <li key={vendorKey}>{vendor.region}: <a href={vendor.vendor.url}>{vendor.vendor.name}</a></li>
                )
            }
        })
    }

    const kits = getSet.kits.map( kit => {
        return (
            <KitTile
                key={kit.id}
                kit={kit}
                currentUser={props.currentUser}
            />
        )
    })

    const editSet = (event) => {
        event.preventDefault()
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

    let adminSetOptions
    if (props.currentUser && props.currentUser.administrator === true) {
        adminSetOptions = (
            <div>
                <button className="adminSetOptionsDelete" onClick={deleteSet}>
                    Delete Keycap Set
                </button>
                <button className="adminSetOptionsEdit" onClick={editSet}>
                    Edit Keycap Details
                </button>
            </div>
        )
    }

    const addKit = (event) => {
        event.preventDefault()
        setshouldRedirectToNewKitForm(true)
    }

    let adminKitOptions
    if(props.currentUser && props.currentUser.administrator === true) {
        adminKitOptions = (
            <div>
                <button className="adminKitOptionsAdd" onClick={addKit}>
                    Add Kit
                </button>
            </div>
        )
    }

    if (shouldRedirectToIndex) {
        return (<Redirect push to="/list" />)
    }

    const editFormURL = `/edit/${id}`
    if (shouldRedirectToEditForm) {
        return (<Redirect push to={editFormURL} />)
    }

    const addKitURL = `/newkit/${id}`
    if (shouldRedirectToNewKitForm) {
        return (<Redirect push to={addKitURL} />)
    }

    return (
        <div className="showPage">

            <div className="showPageDetails">
                <div className="setHeader">
                    <div className="setHeaderDetails">
                        <div className="setHeaderAdminOptions">
                            {adminSetOptions}
                        </div>
                        <div>
                            <h2><strong>{getSet.name}</strong></h2>
                            <p>by {designers}</p>
                        </div>
                    </div>
                    <div className="showPageImage">
                        <img src={getSet.imageURLpath} alt="{getSet.name} display" />
                    </div>
                </div>

                <div className="setDetails">
                    {setDetails}
                </div>

                <div className="setDetails">
                    <h3><strong>Vendors:</strong></h3>
                    {vendorDetails}
                </div>

                <div className="kitsDisplay">
                    {adminKitOptions}
                    <h3><strong>Kits:</strong></h3>
                    {kits}
                </div>
            </div>
            <div className="mechmarketShowPage">
                <MechMarketShowPage name={getSet.name}/>
            </div>
        </div>
    )
}

export default SetShowPage
