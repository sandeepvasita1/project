import { useState } from "react"
export default function Count()
{

    // disbale + button when value of ocunt is 5
    //disable - button when value of count is 0
const [count,setcount] = useState(0) 
    let increment = ()=>
    {
        setcount(count+1)
    }
    let decrement = ()=>
    {
            setcount(count-1)
    }
    return(
        <>
        <div className="flex gap-3">
            <input type="button" value="-" onClick={()=>decrement()} className="w-8  border-2" disabled={count==0}  />
            {count}
            <input type="button" value="+" onClick={()=>increment()} className="w-8  border-2" disabled={count==5} />
            </div></>
    )
}