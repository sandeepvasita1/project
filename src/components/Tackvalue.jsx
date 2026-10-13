import React,{useState} from "react"

export default function Tackvalue()
{
    const[username,setusername]=useState("demo")
    return(
        <div>
            <p>enter the name<input type="text" onBlur={(e)=>setusername(e.target.value)}></input></p>
            welcome{username}
        </div>
    )
}