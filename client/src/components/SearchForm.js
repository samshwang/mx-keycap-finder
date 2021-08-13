import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const SearchForm = (props) => {
    const emptyQuery = {
        colors: "",
        themes: "",
        designers: "",
        vendors: ""
    }

    const [getQuery, setQuery] = useState(emptyQuery)
    const [redirectToForm, setRedirectToForm] = useState(false)

    const trackQueryInput = (event) => {
        setQuery({
            ...getQuery,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const clearForm = (event) => {
        event.preventDefault()
        setQuery(emptyQuery)
    }

    const url = `/api/v1/sets/?colors=${getQuery.colors}&themes=${getQuery.themes}&designers=${getQuery.designers}`
    const submitForm = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(url)
            const body = await response.json()
            props.setSets(body.sets)
        } catch (error) {
            console.log(`Error in Fetch: ${error.message}`)
        }
    }

    const redirectToNewSetForm = (event) => {
        event.preventDefault()
        setRedirectToForm(true)
    }

    let adminOptions
    if (props.currentUser && props.currentUser.administrator === true) {
        adminOptions = (
            <button className="adminOptionsAdd" onClick={redirectToNewSetForm}>
                Add New Keycap Set
            </button>
        )
    }

    if (redirectToForm) {
        return (
            <Redirect push to="/new" />
        )
    }

    return (
        <div>
            <h5>Search for keycaps:</h5>

            <form onSubmit={submitForm}>
                <label htmlFor="colors">
                    by color
                    <input
                        type="text"
                        name="colors"
                        onChange={trackQueryInput}
                        value={getQuery.color}
                    />
                </label>

                <label htmlFor="themes">
                    by theme
                    <input
                        type="text"
                        name="themes"
                        onChange={trackQueryInput}
                        value={getQuery.theme}
                    />
                </label>

                <label htmlFor="designers">
                    by designer
                    <input
                        type="text"
                        name="designers"
                        onChange={trackQueryInput}
                        value={getQuery.designer}
                    />
                </label>

                <div>
                    <input
                        type="submit"
                        value="search"
                    />
                    <input
                        type="submit"
                        value="clear"
                        onClick={clearForm}
                    />
                </div>
            </form>
                <div>
                    {adminOptions}
                </div>
        </div>
    )
}

export default SearchForm