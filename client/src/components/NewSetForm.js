import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const NewSetForm = (props) => {
    const emptyForm = {
        name: "",
        profile: "",
        imageURLpath: "",

        link: "",
        releaseDate: "",
        salesFormat: "",
        round: "",
        status: ""
    }

    const [getNewSet, setNewSet] = useState(emptyForm)
    const [errors, setErrors] = useState([])
    const [redirectToIndex, setRedirectToIndex] = useState(false)
    const [newSetID, setNewSetID] = useState()

    const trackUserInput = (event) => {
        setNewSet({
            ...getNewSet,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const submitForm = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch("/api/v1/sets/new", {
              method: "POST",
              headers: new Headers({
                "Content-Type": "application/json"
              }),
              body: JSON.stringify(getNewSet)
            })
            if(!response.ok) {
              if(response.status === 422) {
                const body = await response.json()
                const newErrors = translateServerErrors(body.errors)
                return setErrors(newErrors)
              } else {
                const errorMessage = `${response.status}: (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
              }
            } else {
                const body = await response.json()
                setNewSetID(body.set.id)
                setRedirectToIndex(true)
            }
          } catch(error) {
            console.error(`Error in Fetch: ${error.message}`)
          }
    }

    const clearForm = (event) => {
        event.preventDefault()
        setNewSet(emptyForm)
    }

    const newURL = `/${newSetID}`
    if (redirectToIndex) {
        return (
            <Redirect push to={newURL} />
        )
    }

    if (props.currentUser && props.currentUser.administrator === true) {
        return (
            <div className="newSetForm" onSubmit={submitForm}>
            <ErrorList errors={errors} />
            <h4>Submit a New Keycap Set</h4>
            <form>
            <label htmlFor="name">
            Name:
            <input
                type="text"
                name="name"
                onChange={trackUserInput}
                value={getNewSet.name}
            />
            </label>

            <label htmlFor="profile">
            Profile:
            <input
                type="text"
                name="profile"
                onChange={trackUserInput}
                value={getNewSet.profile}
            />
            </label>

            <label htmlFor="imageURLpath">
            Image Link:
            <input
                type="text"
                name="imageURLpath"
                onChange={trackUserInput}
                value={getNewSet.imageURLpath}
            />
            </label>

            <label htmlFor="link">
            Website:
            <input
                type="text"
                name="link"
                onChange={trackUserInput}
                value={getNewSet.link}
            />
            </label>

            <label htmlFor="releaseDate">
            Release Date:
            <input
                type="date"
                name="releaseDate"
                onChange={trackUserInput}
                value={getNewSet.releaseDate}
            />
            </label>

            <label htmlFor="salesFormat">
            Sales Format:
            <input
                type="text"
                name="salesFormat"
                onChange={trackUserInput}
                value={getNewSet.salesFormat}
            />
            </label>

            <label htmlFor="round">
            Round:
            <input
                type="text"
                name="round"
                onChange={trackUserInput}
                value={getNewSet.round}
            />
            </label>

            <label htmlFor="status">
            Status:
            <input
                type="text"
                name="status"
                onChange={trackUserInput}
                value={getNewSet.status}
            />
            </label>

            <div>
            <input
                className="inputButton"
                type="submit"
                value="Add"
            />
            <input
                className="inputButton"
                type="submit"
                value="clear"
                onClick={clearForm}
            />
            </div>
            </form>
            </div>
        )
    } else {
        return (
            <div className="newSetForm">
                <p>You must be logged into an admin account to add or edit keycap sets</p>
            </div>
        )
    }
}

export default NewSetForm
