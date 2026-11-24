

import Regeg from "./components/Regeg"
import Service from "./components/Service"
import Services from "./components/Services"
import Tackvalue from "./components/Tackvalue"
import Users from "./components/Users"
import Working from "./components/Working"
import Sum from "./components/Sum"
import All_Employees from "./components/All_Employees"
import { Route,Routes } from "react-router-dom"
import Menubar from "./components/Menuber"
import Home from "./components/Home"
import Effacteg from "./components/Effacteg"
import Student from "./components/Student"
import Taskmain from "./components/Taskmain"
import Contexthome from "./components/contextcomponents/Contexthome"
import Contextcolor from "./components/contextcomponents/Contextcolor"
import { userContext } from "./contexts/userContext";
import ContextLogin from "./components/contextcomponents/ContextLogin";
import Logout from "./components/contextcomponents/Logout";
import Contextuserhome from "./components/contextcomponents/Contextuserhome";
import { useState } from "react";
export default function App() {
  const [uname,setuname] = useState("")
  return (
    <>
<userContext.Provider value={{uname:uname,setuname}}>
  {/* {uname==""?<ContextLogin></ContextLogin>:<ContextUserHome></ContextUserHome>} */}
  <Routes>
    <Route path="/login" element={<ContextLogin></ContextLogin>}></Route>
    <Route path="/logout" element={<Logout></Logout>}></Route>
    <Route path="/home" element={<Contextuserhome></Contextuserhome>}></Route>
  </Routes>

</userContext.Provider>

{/* export default function App() {
    return (
        <>
        {/* <Contexthome></Contexthome> */}
        {/* <Contextcolor></Contextcolor> */}
        {/* <Taskmain></Taskmain> */}
        {/* <Student></Student> */}
        {/* <Effacteg></Effacteg> */}
       {/* <Services></Services> */}
       {/* <Working></Working> */}
       {/* <Users></Users> */}
       {/* <Regeg></Regeg> */}
     
       
       {/* <Tackvalue></Tackvalue> */}
      {/* <Sum></Sum> */}
      {/* <Count></Count> */}
      {/* <All_Employees></All_Employees> */}
      {/* <h1>this is above routes</h1>
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Count" element={<Count></Count>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Service/:id" element={<Service></Service>}></Route>
        <Route path="/employees" element={<All_Employees></All_Employees>}></Route>

      </Routes> */}
           
        </>
    )
}

