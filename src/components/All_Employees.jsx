import React, { useState } from 'react'
import useravatar from "../assets/images/user1.jpeg"
import { employees } from '../data'
import Popup from './Popup'
export default function All_Employees() {
     const [selectedEmployee, setSelectedEmployee] = useState(null)
    let emps_ui = employees.map((employee)=>{
        return <div className=' p-4 bg-gray-200'>
            <img src={useravatar} className='rounded-full border-4 aspect-square w-3/4' alt="" srcset="" />
            <div>{employee.name}</div>
            <div>{employee.department}</div>
            <div onClick={()=>setSelectedEmployee(employee)}>view details</div>
            
        </div>
    })
  return (
    <div>Our Employees <hr />
    <div className='grid grid-cols-4'>
        {emps_ui}
        <div>
            {selectedEmployee && (
             <Popup showpopup={true} closepopup={()=>setSelectedEmployee(null)} children={selectedEmployee}></Popup>
            )}
            </div>
        </div></div>
  )
}