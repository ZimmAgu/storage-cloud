import React from 'react';
import AuthorizationProvider from './authorization';
import SignUpForm from './myComponents/signUp';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App () {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path="/signup"

                        render={() => (
                            <AuthorizationProvider>
                                <SignUpForm />
                            </AuthorizationProvider>
                         )}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default App;
