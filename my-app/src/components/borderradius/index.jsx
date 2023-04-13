import { useState } from "react";
 function BorderRadius(){
    const[value1, setValue1]=useState('');
    const[value2, setValue2]=useState('');

const handleClick=()=>{
    setValue2(value1)
}

    return(
        <div style={{
            height:'300px',
            width:'300px',
            backgroundColor:'green',
            borderRadius:value2+'px'
        }}>
            <input value={value1} onChange={(e)=> setValue1(e.target.value)} />
            <button onClick={handleClick}>
            </button>
        </div>
    )
 }
 export  default BorderRadius