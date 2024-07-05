import React from 'react'
import './styling/Tiles.css'
export default function Tile(props){
    
    var selected = props.selected ? "selected" : "";    
    return(
    <div className={`tile ${selected}`} onClick={props.handleClick}  >
        <span className="num"> {props.num} </span>
    </div>
    )
}