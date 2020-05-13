import React, { useState } from 'react';



export function Input(props:any){
     const [text,settext] = useState("");
    
    function handleChange(e:any){
        settext(e.target.value)
    }

    return(
        <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={() => props.added(text)}>Add</button>
        </div>
    )
}
