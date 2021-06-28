import React from 'react'
import {useAuthContext} from '../authorization'

function Homepage() {
    const {currentUser} = useAuthContext()

    return (
        <>
            <h1>Hello {currentUser.email}</h1>   
        </>
    )
}

export default Homepage
