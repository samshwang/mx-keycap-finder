import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"

import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"
import TimeFormatConverter from "../services/TimeFormatConverter.js"

const SetEditForm = (props) => {
    const { id } = useParams()

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

    const [getEdittedSet, setEdittedSet] = useState({})
    const [errors, setErrors] = useState([])
    const [redirectToSetShowPage, setRedirectToSetShowPage] = useState(false)

    const fetchSet = async () => {
        try {
            const response = await fetch(`/api/v1/sets/${id}`)
            if (!response.ok) {
                const errorMessage = `${response.status}: (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            } else {
                const set = await response.json()
                set.set.releaseDate = TimeFormatConverter.db2js(set.set.releaseDate)
                setEdittedSet(set.set)
            }
        } catch (error) {
            console.log(`Error in Fetch: ${error.message}`)
        }
    }

    useEffect( () => {
        fetchSet()
    }, [])

    const trackUserInput = (event) => {
        setEdittedSet({
            ...getEdittedSet,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const submitForm = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(`/api/v1/sets/edit/${id}`, {
              method: "PATCH",
              headers: new Headers({
                "Content-Type": "application/json"
              }),
              body: JSON.stringify(getEdittedSet)
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
                setRedirectToSetShowPage(true)
            }
          } catch(error) {
            console.error(`Error in Fetch: ${error.message}`)
          }
    }

    const clearForm = (event) => {
        event.preventDefault()
        setEdittedSet(emptyForm)
    }

    if (redirectToSetShowPage) {
        const showPageURL = `/${id}`
        return (
            <Redirect push to={showPageURL} />
        )
    }

    return (
        <div className="newSetForm" onSubmit={submitForm}>
            <ErrorList errors={errors} />
            <h4>Edit Keycap Set</h4>
            <form>
            <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={trackUserInput}
                        value={getEdittedSet.name}
                    />
                </label>

                <label htmlFor="profile">
                    Profile:
                    <input
                        type="text"
                        name="profile"
                        onChange={trackUserInput}
                        value={getEdittedSet.profile}
                    />
                </label>

                <label htmlFor="imageURLpath">
                    Image Link:
                    <input
                        type="text"
                        name="imageURLpath"
                        onChange={trackUserInput}
                        value={getEdittedSet.imageURLpath}
                    />
                </label>

                <label htmlFor="link">
                    Website:
                    <input
                        type="text"
                        name="link"
                        onChange={trackUserInput}
                        value={getEdittedSet.link}
                    />
                </label>

                <label htmlFor="releaseDate">
                    Release Date:
                    <input
                        type="date"
                        name="releaseDate"
                        onChange={trackUserInput}
                        value={getEdittedSet.releaseDate}
                    />
                </label>

                <label htmlFor="salesFormat">
                    Sales Format:
                    <input
                        type="text"
                        name="salesFormat"
                        onChange={trackUserInput}
                        value={getEdittedSet.salesFormat}
                    />
                </label>

                <label htmlFor="round">
                    Round:
                    <input
                        type="text"
                        name="round"
                        onChange={trackUserInput}
                        value={getEdittedSet.round}
                    />
                </label>

                <label htmlFor="status">
                    Status:
                    <input
                        type="text"
                        name="status"
                        onChange={trackUserInput}
                        value={getEdittedSet.status}
                    />
                </label>

                <div>
                    <input
                        className="inputButton"
                        type="submit"
                        value="Confirm Edits"
                    />
                    <input
                        className="inputButton"
                        type="submit"
                        value="Clear"
                        onClick={clearForm}
                    />
                </div>
            </form>
        </div>
    )
}

export default SetEditForm
