import {React, useRef, useState} from 'react';
import {Alert, Button, Card, Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthContext} from '../authorization';
import {Link, useHistory} from 'react-router-dom'

function LoginForm () {
        // These refs are used so I can get the value of the Email & Passwords in the handle submission function
        const loginEmailRef = useRef();
        const loginPasswordRef = useRef();

        const {logUserIn} = useAuthContext(); // Firebase functionality imported from authorization.js to add a new user to the database
        const [formError, setFormError] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
        const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering
        const history = useHistory()
       
        function handleFormSubmission (event) {
            event.preventDefault()
            
            
            logUserIn(loginEmailRef.current.value, loginPasswordRef.current.value)
                .then(() => {
                    setFormError('');
                    setLoadingStatus(true);
                    console.log('Login successful')
                    history.push('/') // Redirects to the root page of the document
                })
                .catch( () => {
                    setFormError('Log in was not successful')
                    console.log('Login failed')
                })

            setLoadingStatus(false);
        }

    return (
        <> 
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "25em"}}>
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
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Don't have an account? <Link to='./signup'>Sign up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default LoginForm
