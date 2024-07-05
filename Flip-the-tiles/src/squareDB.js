var a = 0;
const initialTiles = Array.from({ length: 60 }).map((index,item)=>{
    a++;
    return (
        item={
            id :a, 
            selected:false,
            won : false,
            num : ( Math.floor(Math.random() * 5) + 1)
        }
    )
});
export default initialTiles;