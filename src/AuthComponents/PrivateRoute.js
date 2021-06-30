import React from 'react'
import {useAuthContext} from '../Firebase/authorization'
import { Route, Redirect } from 'react-router';

function PrivateRoute ({ component: Component, ...rest }) {
    const {currentUser} = useAuthContext();
    return (
        <>
           <Route {...rest}
                render={props => {
                    return currentUser ? <Component props /> : <Redirect to='./login'/>
                }}
           /> 
        </>
    )
}

export default PrivateRoute
