import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Input(props:any){
    const [text,settext] = useState("");
    
    function handleChange(e:any){
            settext(e.target.value)
        }

    function handleKeyPress(e:any){
        if (e.key === "Enter"){
            props.added(text);
            settext("");
        }
    }

    function onClick(){
        props.added(text)
        settext("");
    }

    return(
        <div className="input-div" onKeyPress={handleKeyPress}>
        <input className="input" value={text} type="text" onChange={handleChange} placeholder="todo"/>
        <Button className="addbtn" variant="primary" size="sm" onClick={onClick} >Add</Button>
        </div>
    )
}
