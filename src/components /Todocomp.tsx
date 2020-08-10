import React from 'react';
import './cssfiles/Todocomp.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Todocomp(props:any){

    return(
         <div className = "todocomp">
            {!props.state? 
                <h1 className="todo">{props.todo}</h1>: 
                <h1 style={{textDecorationLine: 'line-through'}} className="todo">{props.todo}</h1>
            }
            <Button size="sm" variant="danger" className="dlt" onClick={() =>  props.remove(props.passindex)}>delete</Button>
        </div>
    )
}