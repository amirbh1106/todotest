import React, { useState} from 'react';
import {Input} from './Input'
import {Todocomp} from './Todocomp'
import './cssfiles/todoapp.css';

interface ITodo {
    todo:string 
    complete:boolean
}

export function Todoall(){
    const [textarr,settextarr] = useState<ITodo[]>([])

    function todoadded(todo:string){
        if(todo === ""){
            alert("you cant add nothing brov");
        }else{
        settextarr([...textarr, {todo , complete : false}]);
        }
    }
    function onremove(index:number){
        textarr[index].complete = !textarr[index].complete;
        settextarr([...textarr]);
        
    }
    return(
        <div className="todoapp">
        <Input added={todoadded}/>
        {textarr.map((c , index )=> <Todocomp todo={c.todo} state={c.complete} passindex={index} key={index} remove={onremove}/>)}
        </div>
    )
}

    