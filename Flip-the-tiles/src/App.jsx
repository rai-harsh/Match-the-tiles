import React from 'react'
import './styling/App.css'
import './styling/Tiles.css'
import Tile from './tile.jsx'
import initialTiles from './squareDB.js'
function App() {

  // STATE CONTAINING THE INITIAL TILES
  const [InitTile,setTiles]= React.useState(initialTiles);
  const [Selection, setSelection]= React.useState([]);

  // functions that toggles the selected prop
  function toggle(id,num){
     // calling the selection function that pushes the tile number inside the array
    setTiles((prevTile)=>{
      return prevTile.map((item)=>{
        return item.id===id ? {...item, selected : !item.selected}: item; 
      })
    })
    selection(id,num); 
  } 

  React.useEffect(() => {
    console.log(Selection); // This will log the updated state whenever it changes
  }, [Selection]);

  // This function puts the selectedn  tile inside the array and checks for a match as well
  function selection(id,num)
  {
    if(Selection.length==0){
      setSelection((prevSelection) => [...prevSelection, {number :num , id : id}]); // Pushes num of the selected object inside array
    }
    else if(Selection[0].number==num && Selection[0].id != id){
      setSelection((prevSelection)=>[]);
      win(id,Selection[0].id);
      clean();
    }
    else {
      setSelection((prevSelection)=>[]);
      setTimeout(() => {
        clean();
      }, 400); 
    }
  }

  function win(id1,id2){
    setTiles((prevTile)=>{
      return prevTile.map((item)=>{
        return (item.id==id1 || item.id==id2) ? {...item, won:!item.won}: item; 
      })
    })
  }
  function clean(){
    console.log("cleaning")
    setTiles((prevTile)=>{
      return prevTile.map((item)=>{
        return item.selected==true ? {...item, selected : !item.selected}: item; 
      })
    })
  }

  // Tiles constat is responsible for rendering all the 60 tiles by mapping the raw state 
  const tiles = InitTile.map((item)=>{return (
    <Tile 
      id ={item.id}
      selected={item.selected}
      won = {item.won}
      num = {item.num}
      handleClick={()=>toggle(item.id,item.num)}
      src={item.img}
    />
  )});

    return (
    <div className='tiles'>
     {tiles}
    </div>
  )
}

export default App;
