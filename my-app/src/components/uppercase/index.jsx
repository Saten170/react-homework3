import { useState } from "react";
 
function UpperCase(){
const [title, setTitle]=useState('')
const [value1,setValue1]=useState('')

const handleClick=()=>{
    setTitle(value1)
}

    return (
        <>
        <input value={value1} onChange={(e)=>setValue1(e.target.value)} />
        <button onClick={handleClick}>Click me</button>
        {
        title?<p>{title.toUpperCase()},<span>{title.length}</span></p>:null
        }
        </>
    )
}
export default UpperCase