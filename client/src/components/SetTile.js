import React from "react"
import { Link } from "react-router-dom"

const SetTile = (props) => {
    const { set } = props

    const setShowPageURL = `/${set.id}`

    return (
        <Link to={setShowPageURL} >
            <div className="SetTile">
                <h3><strong>{set.name}</strong></h3>
                <div className="SetTileImage">
                    <img src={set.imageURLpath}/>
                </div>
            </div>
        </Link>
    )
}

export default SetTile