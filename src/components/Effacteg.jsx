import React, { useEffect, useState } from 'react'

export default function Effecteg() {
    const [count,setcount] = useState(0)
    const [count1,setcount1] = useState(100)
    const [total,settotal] = useState(0)
    useEffect(()=>
    {
        console.log("Effect called")
        settotal(count * 100)
    },[count])
  return (
    <div>Effecteg
        <p>
           Item quantity  <input type="button" className='border p-2 bg-blue-400 text-2xl' value="-" onClick={()=>setcount(count-1)} />
             {count} <input type="button" value="+" onClick={()=>setcount(count+1)} className='border p-2 bg-blue-400 text-2xl'/>
             price : {total}
        </p>
          <p>
             <input type="button" value="-" onClick={()=>setcount1(count1-1)} className='border p-2 bg-blue-400 text-2xl' />
             {count1} <input type="button" value="+" onClick={()=>setcount1(count1+1)} className='border p-2 bg-blue-400 text-2xl'/>
        </p>
    </div>
  )
}