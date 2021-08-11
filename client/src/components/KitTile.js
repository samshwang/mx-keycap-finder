import React from "react"

const KitTile = ({kit}) => {
    const { name, price, imageURLpath } = kit

    return (
        <div className="kitTile">
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <div className="kitPictures">
                <img src={imageURLpath} alt="" />
            </div>
        </div>
    )
}

export default KitTile