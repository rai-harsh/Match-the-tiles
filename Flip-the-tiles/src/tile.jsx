import React, { useState, useEffect } from 'react';
import './styling/Tiles.css';


export default function Tile(props)
{
    if(props.won==true){
        var color = "won";
        var todo = ()=>{alreadyWon()};   
    }else{
    var color =  props.selected ? "clicked" : ""; 
    var todo = ()=>{props.handleClick()};   
    }
    console.log(props.src);
    function alreadyWon(){
        alert("Already won")
    }
    return(

    <div  className={`tile ${color}`} onClick={todo}  >
        {/* <spam>{props.num}</spam> */}
        <img src ={props.src} />
        {/* if the won is true then just permanently attach the selected class */}
    </div>

)
}