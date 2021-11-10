import React, { useContext } from 'react'
import { authContext } from '../context/AuthContext'

const Logout = () => {

    const authCtx = useContext(authContext)


    return <div><button onClick={authCtx.login}>Log Out</button></div>
}

export default Logout
