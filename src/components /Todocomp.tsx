import React from 'react';
import './Todocomp.css';


export function Todocomp(props:any){
    return(
        <div>
        {
        !props.state ?  
         <div className = "todocomp">
            <h1 className="todo">{props.todo}</h1>
            <button className="edit" onClick={() => console.log(props.todo)}>edit</button>
            <button className="dlt" onClick={() =>  props.remove(props.passindex)}>x</button>
        </div> : <div></div>
        }
        </div>
    )
}