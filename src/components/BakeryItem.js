// TODO: create a component that displays a single bakery item
// TODO: create a component that displays a single bakery item
import "../App.css";

import React from 'react'

export default function BakeryItem(props) {
    return (
        <>
        <p>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", width: "70vw", marginTop: "2vw"}}>
            <div className="BakeryItem">
                <img className="BakeryItem" src = {props.image} />
            </div>
           
        <div style={{marginLeft: "2vw"}}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button onClick={props.onClick}>Add To Cart</button>
        </div>
        </div>
        </p>
        </>
    )
}
