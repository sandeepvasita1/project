import { useState } from "react";
export default function Sum(){

    const[a,setA]=useState(0)
    const[b,setB]=useState(0)
    const[Answer,setans]=useState(0)
    return(
        <>
        <div className="flex flex-col items-center w-2/5 gap-5 border-2 border-purple-500 mx-auto p-5 m-5">
            <p>Enter A: <input type="text" name="" id="" onBlur={(e)=>setA(parseInt(e.target.value))} className="border-2" /></p>
            <p>Enter B: <input type="text" name="" id="" onBlur={(e)=>setB(parseInt(e.target.value))} className="border-2" /></p>
            
            <p className="flex gap-5">
                <input type="button" value="sum" onClick={()=>setans(a+b)} className="border-2 p-2 rounded-2xl"/>
                <input type="button" value="sub" onClick={()=>setans(a-b)} className="border-2 p-2 rounded-2xl"/>
                <input type="button" value="mul" onClick={()=>setans(a*b)} className="border-2 p-2 rounded-2xl"/>
                <input type="button" value="div" onClick={()=>setans(a/b)} className="border-2 p-2 rounded-2xl"/>
            </p>
            <p>{Answer}</p>
        </div>
        </>
    )
}