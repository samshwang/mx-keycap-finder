import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const SearchForm = (props) => {
    const emptyQuery = {
        colors: "",
        themes: "",
        designers: ""
    }

    const [getQuery, setQuery] = useState(emptyQuery)

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

    return (
        <div>
            <h5><strong>Search for keycaps</strong></h5>

            <form onSubmit={submitForm}>
                <label htmlFor="colors">
                    by color<br/>
                    (example: "red", "brown, red")
                    <input
                        type="text"
                        name="colors"
                        onChange={trackQueryInput}
                        value={getQuery.colors}
                    />
                </label>

                <label htmlFor="themes">
                    by theme
                    <input
                        type="text"
                        name="themes"
                        onChange={trackQueryInput}
                        value={getQuery.themes}
                    />
                </label>

                <label htmlFor="designers">
                    by designer
                    <input
                        type="text"
                        name="designers"
                        onChange={trackQueryInput}
                        value={getQuery.designers}
                    />
                </label>

                <div>
                    <input
                        className="inputButton"
                        type="submit"
                        value="search"
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
}

export default SearchForm
