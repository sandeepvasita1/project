
import React, { useState } from 'react'
import { colorContext } from '../../contexts/colorContext'
import Contextcolorhome from './Contextcolorhome'
import Contextcolorprofile from './Contextcolorprofile'

export default function Contextcolor() {

    const [colorname, setcolorname] = useState("red")

    return (
        <div>
            Contextcolor
            <br />

            <colorContext.Provider value={{
                cname: colorname,
                setcolor: setcolorname
            }}>

                <Contextcolorhome />
                <hr />
                <Contextcolorprofile />

            </colorContext.Provider>
        </div>
    )
}
