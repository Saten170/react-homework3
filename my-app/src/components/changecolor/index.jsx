import { useState,useEffect } from "react"

function ChangeTextColor (){
const [text,setText]=useState(false)
const [color,setColor]=useState('red')
const [color1,setColor1]=useState('green')

const handleClick=()=>{
    if(!text){
        setColor(true)
    }else{
        setColor1(false)
    }
}
// const [color,setColor]=useState(false)

// useEffect(()=>{
//     document.text=text;
//     if(text.length){

//     }
// },[text]);


    return(
<>
<h2 value={text}
onChange={handleClick}
// onChange={(e)=>setText(e.target.value)}
>
    Hello World
</h2>
{
        text ? <h2 style={{color:color}}>Hello World</h2>:<h2 style={{color:color1}}>Hello World</h2>
}
</>
    )
}
export default ChangeTextColor