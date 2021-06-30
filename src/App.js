import React from 'react';
import AuthorizationProvider from './Firebase/authorization';
import SignUpForm from './AuthComponents/SignUp';
import LoginForm from './AuthComponents/Login';
import Homepage from './AuthComponents/Homepage';
import PrivateRoute from './AuthComponents/PrivateRoute';
import ForgotPassword from './AuthComponents/ForgotPassword';
import UpdateEmail from './AuthComponents/UpdateEmail';
import UpdatePassword from './AuthComponents/UpdatePassword';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App () {
    return (
        <>
            <Router>
                <Switch>
                    <AuthorizationProvider>
                        <PrivateRoute exact path="/" component={Homepage} />

                        <Route path="/signup" component={SignUpForm} />

                        <Route path="/login" component={LoginForm} />

                        <Route path="/forgotpassword" component={ForgotPassword}/>

                        <PrivateRoute path="/update_email" component={UpdateEmail}/>
                        
                        <PrivateRoute path="/change_password" component={UpdatePassword}/>
                    </AuthorizationProvider>
                </Switch>
            </Router>
        </>
    );
}

export default App;
