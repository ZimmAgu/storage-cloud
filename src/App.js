import React from 'react';
import AuthorizationProvider from './authorization';
import SignUpForm from './myComponents/signUp';
import LoginForm from './myComponents/login';
import Homepage from './myComponents/homepage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App () {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact path="/"

                        render={() => (
                            <AuthorizationProvider>
                                <Homepage />
                            </AuthorizationProvider>
                         )}
                    />

                    <Route
                        path="/signup"

                        render={() => (
                            <AuthorizationProvider>
                                <SignUpForm />
                            </AuthorizationProvider>
                         )}
                    />

                    <Route
                        exact path="/login"

                        render={() => (
                            <AuthorizationProvider>
                                <LoginForm />
                            </AuthorizationProvider>
                         )}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default App;
