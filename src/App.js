import React from 'react';
import AuthorizationProvider from './firebaseAuth/authorization';
import SignUpForm from './myComponents/SignUp';
import LoginForm from './myComponents/Login';
import Homepage from './myComponents/Homepage';
import PrivateRoute from './myComponents/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App () {
    return (
        <>
            <Router>
                <Switch>
                    <AuthorizationProvider>
                        <PrivateRoute exact path="/" component={Homepage} />

                        <Route path="/signup" component={SignUpForm} />

                        <Route exact path="/login" component={LoginForm} />
                    </AuthorizationProvider>
                </Switch>
            </Router>
        </>
    );
}

export default App;
