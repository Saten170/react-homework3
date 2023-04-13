import { useState } from "react"

function ChangeButtonColor (){
    const [color,setColor]=useState('red')
    const randomColor=()=>{
        const r=Math.round(Math.random()*255)
        const g=Math.round(Math.random()*255)
        const b=Math.round(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
    
    }
const handleClick=()=>{
    const randomColor1=randomColor()
    setColor(randomColor1)
}
    return(
<>
        <button onClick={handleClick} style={{backgroundColor:color}}>Click me</button>
</>
    )
}
export default ChangeButtonColor