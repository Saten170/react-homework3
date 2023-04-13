import { useState } from "react";

function Toggle(){
    const [toggle, setToggle]=useState(false)
     const handleClick=()=>{
        if (!toggle){
            setToggle(true)
        }else{
            setToggle(false)
        }
     }
    return(
        <>
        <button onClick={handleClick}>Click me</button>
        {
            toggle ? <p>Hello world</p> :null
        }
        </>
    )
}
export default Toggle