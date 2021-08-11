import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"

import MechMarketShowTile from "./MechMarketShowTile.js"

const MechMarketShowForm = (props) => {
    const [getPosts, setPosts] = useState([])

    const { id } = useParams()

    const fetchPosts = async () => {
        try {
            const response = await fetch(`/api/v1/sets/${id}/mechmarket`)
            if (!response.ok) {
                const errorMessage = `${response.status}: (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)         
            } else {
                const body = await response.json()
                setPosts(body.posts)
            }
        } catch (error) {
            console.log(`Error in Fetch: ${error.message}`)
        }
    }

    const posts = getPosts.map( (post, index) => {
        return (
            <MechMarketShowTile key={index} post={post}/>
        )
    })

    useEffect( () => {
        fetchPosts()
    }, [])

    return (
        <div>
            {posts}
        </div>
    )
}

export default MechMarketShowForm