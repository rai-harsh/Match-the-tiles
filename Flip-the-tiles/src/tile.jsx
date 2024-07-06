import React from 'react'
import './styling/Tiles.css'
export default function Tile(props){
    if(props.won==true){
        var color = "won";
    }else{
    var color =  props.selected ? "selected" : "";    
    }
    return(
    <div className={`tile ${color}`} onClick={props.handleClick}  >
        <span className="num"> {props.num} </span>
    </div>
    )
}