
import { userContext } from '../../contexts/userContext'

import React, { useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

export default function Contextuserhome() {

    const user = useContext(userContext);

    let navigate = useNavigate();

    useEffect(() => {
        if (user.uname == "") {
            navigate("/login");
        }
    }, [user.uname, navigate]);

    return (
        <>
            <div className='flex justify-between'>
                <div>Welcome {user.uname}</div>
                <div><Logout /></div>
            </div>
        </>
    )
}
