import React, { useState } from "react"
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

    const trackUserInput = (event) => {
        setNewKit({
            ...getNewKit,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const submitForm = async (event) => {
        event.preventDefault()
    }

    const clearForm = (event) => {
        event.preventDefault()
        setNewKit(emptyForm)
    }

    if (props.currentUser && props.currentUser.administrator === true) {
        return (
            <div className="newForm" onSubmit={submitForm}>
            <ErrorList errors={errors} />
            <h3>Submit a New Kit for...</h3>
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
