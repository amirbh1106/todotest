import React from 'react';
import './Todocomp.css';


export function Todocomp(props:any){

    return(
         <div className = "todocomp">
            {!props.state? 
                <h1 className="todo">{props.todo}</h1>: 
                <h1 style={{textDecorationLine: 'line-through'}} className="todo">{props.todo}</h1>
            }
            <button className="dlt" onClick={() =>  props.remove(props.passindex)}>x</button>   
        </div>
    )
}