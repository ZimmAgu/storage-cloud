import React, {useState, useContext, useEffect} from 'react'
import { auth } from './firebase'

const AuthorizationContext = React.createContext() 


function useAuthContext () {
    return useContext(AuthorizationContext)
}



function AuthorizationProvider({children}) { // Whatever props are passed to this function will inherit the Context value
    const [currentUser, setCurrentUser] = useState('') // There is no current user until someone signs up of signs in
    const [pageIsLoading, setLoadingStatus] = useState(true); // These states will be used to check whether or not the page is still rendering
    


    function signUserUp (email, password) { // Will be imported to signUp.js and used to create a user
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logUserIn (email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => { 
        const cleanUp = auth.onAuthStateChanged(userState => { // When a user logs in, the current user will be set to the logged in user. When a user logs out, the current user will be set to null
            setCurrentUser(userState)
            setLoadingStatus(false); // Once the user has successfully signed in (or out), that means the page is not longer loading
        })

        return cleanUp // Cleans up the side effect of every state change
    }, []) // The current user should only be set on mount instead of every time the function is rendered

    
    const user = {
        currentUser,
        signUserUp,
        logUserIn
    } // This provider will use this to pass the state of the current user to all descendants


    // The sign in form will not be rendered until the user authorization has finished loading
    return (
        <>
            <AuthorizationContext.Provider value={user}>
                {!pageIsLoading && children}    
            </AuthorizationContext.Provider>
        </>
    )
}

export default AuthorizationProvider
export {useAuthContext}
