import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContext'
// import 
export default function Contextuserhome() {
    const user = useContext(userContext)
    console.log(user)
  return (
    <div>Welcome : {user.uname}
    <br />
    <input placeholder='New username ' type="text" onBlur={(e)=>user.setuname(e.currentTarget.value)}></input>

    </div>
  )
}