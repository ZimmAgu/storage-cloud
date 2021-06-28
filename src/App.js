import React from 'react';
import AuthorizationProvider from './firebaseAuth/authorization';
import SignUpForm from './myComponents/signUp';
import LoginForm from './myComponents/login';
import Homepage from './myComponents/homepage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App () {
    return (
        <>
            <Router>
                <Switch>
                    <AuthorizationProvider>
                        <Route exact path="/" component={Homepage} />

                        <Route path="/signup" component={SignUpForm} />

                        <Route exact path="/login" component={LoginForm} />
                    </AuthorizationProvider>
                </Switch>
            </Router>
        </>
    );
}

export default App;
