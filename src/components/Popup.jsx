import React from 'react'

export default function Popup(props) {

    let showpopup = props.showpopup
    let closepopup = props.closepopup
    let employee = props.children

    if (!showpopup) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

            <div className="relative w-4/5 max-w-lg rounded-lg bg-white p-6 text-black shadow-2xl">

                {/* Close X button */}
                <button
                    onClick={() => closepopup()}
                    className="absolute right-3 top-2 text-2xl font-bold text-gray-500 hover:text-red-500"
                >
                    ×
                </button>

                {/* Popup Heading */}
                <h2 className="mb-4 text-2xl font-bold">
                    Employee Details
                </h2>

                {/* Employee Description */}
                <div className="mb-6">
                    {employee.name}
                    <img src={employee.image} alt="" srcset="" />
                     
        email: {employee.email} <br />
        contact: {employee.contact} <br />
        address: {employee.address} <br />
        salary: {employee.salary} <br />
        experience: {employee.experience} <br />
        department: {employee.department} <br />
        description: {employee.description}
        
                </div>

                {/* Close Button */}
                <input
                    type="button"
                    value="Close"
                    onClick={() => closepopup()}
                    className="cursor-pointer rounded bg-red-500 px-5 py-2 text-white hover:bg-red-600"
                />

            </div>

        </div>
    )
}