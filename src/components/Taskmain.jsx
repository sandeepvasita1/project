
import React, { useState, useEffect, useRef } from 'react'

export default function Taskmain() {

    const [tasklist, settasklist] = useState([])
    const [taskname, settaskname] = useState("")
    const [des, setdes] = useState("")

    const divref = useRef()

    useEffect(() => {
        if (divref.current) {
            divref.current.innerHTML = JSON.stringify(tasklist)
        }

        console.log("in effect")
    }, [tasklist])

    // ADD ITEM
    let additem = () => {

        if (taskname.trim() === "" || des.trim() === "") {
            alert("Please enter task name and description")
            return
        }

        let temp = [
            ...tasklist,
            {
                taskname: taskname,
                des: des,
                status: "pending"
            }
        ]

        settasklist(temp)
        settaskname("")
        setdes("")

        console.log("in add item")
    }

    // DELETE ITEM
    let deleteitem = (index) => {
        let temp = tasklist.filter((item, i) => i !== index)
        settasklist(temp)
    }

    // COMPLETE ITEM
    let completeitem = (index) => {
        let temp = tasklist.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    status: "completed"
                }
            }
            return item
        })

        settasklist(temp)
    }

    return (
        <div className="font-bold bg-amber-100 p-5">

            <h2 className="text-3xl">Taskmain</h2>

            <br />

            <label>Task Name:</label>
            <br />

            <input
                className="border-2 border-black p-2"
                type="text"
                placeholder="Enter task name"
                value={taskname}
                onChange={(e) => settaskname(e.target.value)}
            />

            <br /><br />

            <label>Description:</label>
            <br />

            <input
                className="border-2 border-black p-2"
                type="text"
                placeholder="Enter task description"
                value={des}
                onChange={(e) => setdes(e.target.value)}
            />

            <br /><br />

            <input
                className="bg-blue-300 border-2 border-black px-4 py-2"
                type="button"
                value="ADD"
                onClick={additem}
            />

            <hr className="my-4 border-black" />

            <h3 className="text-2xl">My Tasks</h3>

            {tasklist.map((item, index) => (
                <div
                    key={index}
                    className="bg-white border-2 border-gray-400 p-4 my-3"
                >

                    <h4 className="text-xl">
                        Task Name: {item.taskname}
                    </h4>

                    <p>Description: {item.des}</p>

                    <p>
                        Status: {item.status}
                    </p>

                    <input
                        className="bg-red-400 border-2 border-black px-3 py-1 mr-2"
                        type="button"
                        value="Delete"
                        onClick={() => deleteitem(index)}
                    />

                    <input
                        className="bg-green-400 border-2 border-black px-3 py-1"
                        type="button"
                        value="Complete"
                        onClick={() => completeitem(index)}
                        disabled={item.status === "completed"}
                    />

                </div>
            ))}

            <hr className="my-4 border-black" />

            <h3 className="text-2xl">Task List Data</h3>

            <div
                className="bg-green-400 p-3 break-all"
                ref={divref}
            ></div>

        </div>
    )
}
