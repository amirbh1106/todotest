import React, { useState } from 'react';



export function Input(props:any){
     const [text,settext] = useState("");
    
    function handleChange(e:any){
            settext(e.target.value)
        }
    function handleKeyPress(e:any){
        if (e.key === "Enter"){
            props.added(text);
          }
    }

    return(
        <div style={{padding : "50px",}} onKeyPress={handleKeyPress}>
        <input type="text" onChange={handleChange} placeholder="todo"/>
        <button onClick={() => props.added(text)} >Add</button>
        </div>
    )
}
