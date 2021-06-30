// React Imports
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Firebase Imports
import AuthorizationProvider from './Firebase/authorization';

// AuthComponent Imports
import ForgotPassword from './AuthComponents/ForgotPassword';
import LoginForm from './AuthComponents/Login';
import PrivateRoute from './AuthComponents/PrivateRoute';
import SignUpForm from './AuthComponents/SignUp';
import UpdateEmail from './AuthComponents/UpdateEmail';
import UpdatePassword from './AuthComponents/UpdatePassword';
import UserProfile from './AuthComponents/UserProfile';

// Storage Cloud Imports



function App () {
    return (
        <Router>
            <Switch>
                <AuthorizationProvider>

                    {/* Storage Cloud Components */}
                    

                    {/* User Profile Components */}
                    <PrivateRoute path="/user_profile" component={UserProfile} />

                    <PrivateRoute path="/update_email" component={UpdateEmail}/>
                    
                    <PrivateRoute path="/change_password" component={UpdatePassword}/>


                    {/* Authentication Routes */}
                    <Route path="/signup" component={SignUpForm} />

                    <Route path="/login" component={LoginForm} />

                    <Route path="/forgotpassword" component={ForgotPassword}/>

                    
                </AuthorizationProvider>
            </Switch>
        </Router>
    );
}

export default App;
