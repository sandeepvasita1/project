import React from 'react'
import Service from './Service'
export default function Services() {
 let s =   [
  {
    "name": "Web Development",
    "des": "We create responsive and user-friendly websites for businesses and organisations."
  },
  {
    "name": "Mobile App Development",
    "des": "We develop mobile applications that provide smooth performance and a simple user experience."
  },
  {
    "name": "UI/UX Design",
    "des": "We design clean and engaging user interfaces focused on usability and accessibility."
  },
  {
    "name": "Cloud Services",
    "des": "We provide cloud-based solutions to help businesses manage applications, data, and infrastructure."
  },
  {
    "name": "Data Analytics",
    "des": "We transform business data into useful insights through reporting, dashboards, and data analysis."
  }
]
let ui = s.map((ser)=>{
    return <Service name={ser.name} des={ser.des}></Service>
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