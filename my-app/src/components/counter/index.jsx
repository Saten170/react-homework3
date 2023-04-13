import { useState } from "react"
function Counter(){
    const [count,setCount]=useState(0)
 const handleClick=()=>{
    setCount((prev)=>prev+=1)
 }

    return(
        <>
        <button onClick={handleClick}>Counter</button>
        <p>{count}</p>
        </>
    )
}
export default Counter