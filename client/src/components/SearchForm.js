import React, { useState } from "react"

const SearchForm = (props) => {
    const emptyQuery = {
        color: "",
        theme: "",
        designer: "",
        vendor: ""
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

    const url = `/api/v1/sets/?color=${getQuery.color}&theme=${getQuery.theme}&designer=${getQuery.designer}&vendor=${getQuery.vendor}`
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

                <label htmlFor="designer">
                    by designer
                    <input
                        type="text"
                        name="designer"
                        onChange={trackQueryInput}
                        value={getQuery.designer}
                    />
                </label>

                <label htmlFor="vendor">
                    by vendor (US only at this time)
                    <input
                        type="text"
                        name="vendor"
                        onChange={trackQueryInput}
                        value={getQuery.vendor}
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