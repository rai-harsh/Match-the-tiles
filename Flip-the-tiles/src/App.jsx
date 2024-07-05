import React from 'react'
import './styling/App.css'
import './styling/Tiles.css'
import Tile from './tile.jsx'
import initialTiles from './squareDB.js'
function App() {

  // STATE CONTAINING THE INITIAL TILES
  const [InitTile,setTiles]= React.useState(initialTiles);

  // functions that toggles the selected prop
  function toggle(id){
    selection(id);
    setTiles((prevTile)=>{
      return prevTile.map((item)=>{
        return item.id===id ? {...item, selected : !item.selected}: item; 
      })
    })
  }

  // SELECTION LOGIC
  const [Selection, setSelection]= React.useState([]);
  React.useEffect(() => {
    console.log(Selection); // This will log the updated state whenever it changes
  }, [Selection]);



  function selection(id){
    setSelection((prevSelection) => [...prevSelection, id]);
  }

  // Tiles constat is responsible for rendering all the 60 tiles by mapping the raw state 
  const tiles = InitTile.map((item)=>{return (
    <Tile 
      id ={item.id}
      selected={item.selected}
      won = {item.won}
      num = {item.num}
      handleClick={()=>toggle(item.id)}
    />
  )});

    return (
    <div className='tiles'>
     {tiles}
    </div>
  )
}

export default App;
