import React, {useState, useContext} from 'react'
import { auth } from '../firebase'

const authorizationContext = React.createContext() 


const useAuthContext = useContext(authorizationContext)


function signUserUp (email, password) { // Will be imported to signUp.js and used to create a user
    return auth.createUserWithEmailAndPassword(email, password)
}


function AuthorizationProvider( {descendants} ) { // Whatever props are passed to this function will inherit the Context value
    const [currentUser, setCurrentUser] = useState('') // There is no current user until someone signs up of signs in

    const user = {currentUser} // This provider will use this to pass the state of the current user to all descendants
    
    return (
        <>
            <AuthorizationContext.Provider value={user}>
                {descendants}
            </AuthorizationContext.Provider>
        </>
    )
}

export default AuthorizationProvider
export {useAuthContext, signUserUp}
