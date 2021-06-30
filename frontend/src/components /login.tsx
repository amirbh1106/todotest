import React, { useState} from 'react';
// import {Todoall} from './todo';
import './cssfiles/login.css';
import {
    // BrowserRouter as Router,
    Redirect
  } from "react-router-dom";

interface IUser {
    usern:string 
    userp:string
    aproved:boolean
}


export function Loginpage(){
const[usern,setnuser] = useState("");
const[userp,setpuser] = useState("");
const[user,setuser] = useState<IUser[]>([])

function TransfertoLogin() {
    return <Redirect to="/" />
}
function handleuChange(e:any){
    setnuser(e.target.value)
}
function handlepChange(e:any){
    setpuser(e.target.value)
}
function handlesubmit(){
    if(usern === "" && userp === ""){
        alert("sorry please write you user name and password")
    }
    else if(usern === ""){
        alert("please write your username")
    }
    else if(userp === ""){
        alert("please write your password")
    }
    else{setuser([...user, {usern , userp , aproved:false}])
    setnuser("");
    setpuser("");
    TransfertoLogin();
    }
    
}

return(
    <div className="loginpage">
        <h1 style={{color: 'white'}}>amir todo app</h1>
        <input className="username" placeholder="username" value={usern} onChange={handleuChange}></input><button onClick={handlesubmit} className="submit">submit</button>
        <input className="password" placeholder="password" value={userp} onChange={handlepChange}></input>
    </div>
)
}