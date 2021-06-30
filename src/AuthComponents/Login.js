import {React, useRef, useState} from 'react';
import {Alert, Button, Card, Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthContext} from '../Firebase/authorization';
import {Link, useHistory} from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

function LoginForm () {
    // These refs are used so I can get the value of the Email & Passwords in the handle submission function
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();

    const {currentUser, logUserIn} = useAuthContext(); // Firebase functionality imported from authorization.js to add a new user to the database
    const [formError, setFormError] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
    const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering
    const history = useHistory()
    
    if (currentUser) { // If someone is logged in go straight to the homepage
        history.push('/user_profile')
    }


    function handleFormSubmission (event) {
        event.preventDefault()
        
        logUserIn(loginEmailRef.current.value, loginPasswordRef.current.value)
            .then(() => {
                setFormError('');
                setLoadingStatus(true);
                console.log('Login successful for: ' + loginEmailRef.current.value)
                history.push('/user_profile') // Redirects to the root page of the document
            })
            .catch( () => {
                setFormError('Log in was not successful')
                console.log('Login failed')
            })

        setLoadingStatus(false);
    }

    return ( 
        <CenteredContainer>
            <Card onSubmit={handleFormSubmission}>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {formError && <Alert variant="danger">{formError}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" id="login_Form_Email" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={loginEmailRef} required/>
                        </Form.Group>


                        <Form.Group className="mb-3" id="login_Form_Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={loginPasswordRef} required/>
                        </Form.Group>

                        <Button className="w-100 " type="submit" disabled={pageIsLoading}>Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to="./forgotpassword">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to='./signup'>Sign up</Link>
            </div>
        </CenteredContainer>
    )
}

export default LoginForm
