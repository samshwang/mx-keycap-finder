import React, { useState } from "react"

const SearchForm = (props) => {
    const [getQuery, setQuery] = useState({
        color: "",
        theme: ""
    })

    const trackQueryInput = (event) => {
        setQuery({
            ...getQuery,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const clearForm = (event) => {
        event.preventDefault()
        setQuery({
            color: "",
            theme: ""
        })
    }

    const url = `/api/v1/sets/?color=${getQuery.color}&theme=${getQuery.theme}`
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
            <h5>Search for keycaps:</h5>

            <form onSubmit={submitForm}>
                <label htmlFor="color">
                    by color
                    <input
                        type="text"
                        name="color"
                        onChange={trackQueryInput}
                        value={getQuery.color}
                    />
                </label>

                <label htmlFor="theme">
                    by theme
                    <input
                        type="text"
                        name="theme"
                        onChange={trackQueryInput}
                        value={getQuery.theme}
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
        </div>
    )
}

export default SearchForm