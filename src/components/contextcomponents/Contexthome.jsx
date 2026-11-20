import React, { useState } from 'react'
import { userContext } from '../../contexts/userContext'
import Contextuserhome from './Contextuserhome'
import ContextUserprofile from './ContextUserprofile'
export default function Contexthome() {
const [username,setusername] = useState("John")
    return (
    <div>Contexthome
        <br />
        <userContext.Provider value={{uname:username,setuname:setusername}}>
       <Contextuserhome></Contextuserhome>
       <hr />
       <ContextUserprofile></ContextUserprofile>
        </userContext.Provider>
    </div>
  )
}