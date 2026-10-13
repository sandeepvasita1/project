import React from 'react'
import {services} from '../data'
// import Service from './Service'
import { Link } from 'react-router-dom'
export default function Services() {
 
    let ui=services.map((ser)=>{
      return <div className='w-1/4'>
        <img src={ser.image}/>
        <div>{ser.rating}</div>
        <Link to={"/Service/"+ser.id}>View Details</Link>
      </div>
    })
  return (
    <div className='text-center mx-auto w-4/5 '>
        <h1 className='text-3xl text-cyan-500 font-bold'>Services</h1>
        <p className='text-sm text-gray-700'> <br></br>

        </p>
    <div className='flex gap-5 flex-wrap 
    align-middle items-center justify-center py-10'>
        {ui}
    </div>
    </div>
  )
}