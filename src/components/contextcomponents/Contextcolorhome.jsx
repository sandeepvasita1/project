import React, { useContext } from 'react'
import { colorContext } from '../../contexts/colorContext'

export default function Contextcolorhome() {

    const color = useContext(colorContext)

    return (
        <div>
            Welcome : {color.cname}
            <br />

            <input type="button"
                onClick={(e) => color.setcolor(e.currentTarget.value)}
                value="blue"
                className="bg-blue-700"
            />

            <input type="button"
                onClick={(e) => color.setcolor(e.currentTarget.value)}
                value="green"
                className="bg-green-700"
            />

            <input type="button"
                onClick={(e) => color.setcolor(e.currentTarget.value)}
                value="yellow"
                className="bg-yellow-700"
            />

            <p style={{ background: color.cname, height: "100px" }}></p>
        </div>
    )
}