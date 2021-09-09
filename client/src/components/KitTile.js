import React, { useState } from "react"

const KitTile = (props) => {
    const { name, price, imageURLpath, id } = props.kit

    const deleteKit = async (event) => {
        event.preventDefault()
        const url = `/api/v1/kits/${id}`
        try {
            const response = await fetch(url, {
                method: "DELETE"
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            //force react to refresh!!!
        } catch(error) {
            console.error(`Error in Fetch: ${error.message}`)
        }
    }

    let deleteKitButton
    if(props.currentUser && props.currentUser.administrator === true) {
        deleteKitButton = (
            <button className="adminKitOptionsDelete" onClick={deleteKit}>
                Delete Kit
            </button>
        )
    }

    return (
        <div className="kitTile">
            <div className="kitHeader">
                <h4>{name}</h4>
                {deleteKitButton}
            </div>
            <p>Price: ${price}</p>
            <div className="kitPictures">
                <img src={imageURLpath} alt="" />
            </div>
        </div>
    )
}

export default KitTile
