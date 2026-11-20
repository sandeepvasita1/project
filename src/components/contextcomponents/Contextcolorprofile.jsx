import React from 'react'
import { useContext } from 'react'
import { colorContext } from '../../contexts/colorContext'
export default function Contextcolorprofile() {
  const color = useContext(colorContext)
     console.log(color)
   return (
     <div>{color.cname} Profile</div>
   )
}