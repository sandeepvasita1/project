import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContext'
export default function ContextUserprofile() {
  const user = useContext(userContext)
     console.log(user)
   return (
     <div>{user.uname} Profile</div>
   )
}