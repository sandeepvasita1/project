import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../contexts/userContext'
export default function ContextLogin() {
    let user = useContext(userContext)
    let nameref = useRef()
    let pwdref = useRef()
    let navigate = useNavigate()
    if(user.uname!=""){
        navigate("/home")
    }
    let dologin=()=>
    {
        if(nameref.current.value=="Admin" && pwdref.current.value=="123456"){
            user.setuname(nameref.current.value)
            navigate("/home")
        }
        else{
            alert("invalid user")
        }
    }
  return (
    <div>ContextLogin:
        <div>
            <p>Enter username : <input type="text" ref={nameref} /></p>
            <p>Enter pwd : <input type="text" ref={pwdref} /></p>
            <input type='button' value="Login" onClick={()=>dologin()}/>
        </div>
    </div>
  )
}