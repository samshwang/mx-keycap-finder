import React from "react"

const SetShowTile = (props) => {
    const { set } = props

    return (
        <div className="SetShowTile">
            <h3><strong>{set.name}</strong></h3>
            <img className="SetImage" src={set.imageURLpath}/>
        </div>
    )
}

export default SetShowTile