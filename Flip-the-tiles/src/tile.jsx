import React, { useState, useEffect } from 'react';
import './styling/Tiles.css'

export default function Tile(props)
{
    if(props.won==true){
        var color = "won";
        var todo = ()=>{alreadyWon()};   
    }else{
    var color =  props.selected ? "selected" : ""; 
    var todo = ()=>{props.handleClick()};   
    }
    function alreadyWon(){
        alert("Already won")
    }
    return(
    <div  className={`tile ${color}`} onClick={todo}  >
        <span className="num"> {props.num} </span>
    </div>
    )
}