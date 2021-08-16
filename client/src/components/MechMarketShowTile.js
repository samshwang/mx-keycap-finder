import React, { useState, useEffect } from "react"
import { useParams, Redirect, Link } from "react-router-dom"

const MechMarketShowTile = (props) => {
    const { post } = props

    const date = new Date(post.createdUNIXepochTime * 1000).toDateString()

    return (
        <a href={post.url}>
            <div className="mechmarketTile">
                <p>
                    <strong>{post.title}</strong> <br/>
                    by: {post.author} <br/>
                    date: {date}
                </p>
            </div>
        </a>
    )
}

export default MechMarketShowTile
