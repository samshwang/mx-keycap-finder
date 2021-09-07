import React, { useState, useEffect } from "react"
import { Redirect, useParams } from "react-router-dom"

import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"

const NewKitForm = (props) => {
    const { id } = useParams()

    const emptyForm = {
        name: "",
        price: "",
        imageURL: ""
    }

    const [getNewKit, setNewKit] = useState(emptyForm)
    const [errors, setErrors] = useState([])
    const [redirectToSetPage, setRedirectToSetPage] = useState(false)
    const [getSet, setSet] = useState("...")

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

    const trackUserInput = (event) => {
        setNewKit({
            ...getNewKit,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const submitForm = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(`/api/v1/sets/${getSet.id}/newkit`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(getNewKit)
            })

            if(!response.ok) {
                if(response.status === 422) {
                    const body = await response. json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status}: (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw(error)
                }
            } else {
                setRedirectToSetPage(true)
            }
        } catch (error) {
            console.error(`Error in Fetch: ${error.message}`)
        }
    }

    const clearForm = (event) => {
        event.preventDefault()
        setNewKit(emptyForm)
    }

    const setURL = `/${getSet.id}`
    console.log(setURL)
    console.log(redirectToSetPage)
    if (redirectToSetPage) {
        return (
            <Redirect push to={setURL} />
        )
    }

    if (props.currentUser && props.currentUser.administrator === true) {
        return (
            <div className="newForm" onSubmit={submitForm}>
            <ErrorList errors={errors} />
            <h3>Submit a New Kit for {getSet.name}</h3>
                <form>
                    <label htmlFor="name">
                    Name <em>(required)</em>:
                    <input
                        type="text"
                        name="name"
                        onChange={trackUserInput}
                        value={getNewKit.name}
                    />
                    </label>

                    <label htmlFor="price">
                    Price <em>(required)</em>:
                    <input
                        type="text"
                        name="price"
                        onChange={trackUserInput}
                        value={getNewKit.price}
                    />
                    </label>

                    <label htmlFor="imageURL">
                    Image URL <em>(required)</em>:
                    <input
                        type="text"
                        name="imageURL"
                        onChange={trackUserInput}
                        value={getNewKit.imageURL}
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
            <div className="newForm">
                <p>You must be logged into an admin account to add or edit keycap sets</p>
            </div>
        )
    }
}

export default NewKitForm
