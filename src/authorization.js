import React, {useState, useContext, useEffect} from 'react'
import SignUpForm from './myComponents/signUp'; 
import { auth } from './firebase'

const AuthorizationContext = React.createContext() 


function useAuthContext () {
    return useContext(AuthorizationContext)
}



function AuthorizationProvider( {descendants} ) { // Whatever props are passed to this function will inherit the Context value
    const [currentUser, setCurrentUser] = useState('') // There is no current user until someone signs up of signs in
    
    function signUserUp (email, password) { // Will be imported to signUp.js and used to create a user
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => { 
        const cleanUp = auth.onAuthStateChanged(userState => { // When a user logs in, the current user will be set to the logged in user. When a user logs out, the current user will be set to null
            setCurrentUser(userState)
        })

        return cleanUp // Cleans up the side effect of every state change
    }, []) // The current user should only be set on mount instead of every time the function is rendered

    
    const user = {
        currentUser,
        signUserUp
    } // This provider will use this to pass the state of the current user to all descendants


    return (
        <>
            <AuthorizationContext.Provider value={user}>
                <SignUpForm />
            </AuthorizationContext.Provider>
        </>
    )
}

export default AuthorizationProvider
export {useAuthContext}
