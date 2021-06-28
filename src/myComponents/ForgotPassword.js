import {React, useRef, useState} from 'react';
import {Alert, Button, Card, Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthContext} from '../firebaseAuth/authorization';
import {Link, useHistory} from 'react-router-dom'

function ForgotPassword() {
      // These refs are used so I can get the value of the Email & Passwords in the handle submission function
      const loginEmailRef = useRef();

      const {logUserIn} = useAuthContext(); // Firebase functionality imported from authorization.js to add a new user to the database
      const [formError, setFormError] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
      const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering
      const history = useHistory()
    
    return (
        <>
           <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "25em"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Reset Password</h2>
                            {formError && <Alert variant="danger">{formError}</Alert>}
                            <Form>
                                <Form.Group className="mb-3" id="login_Form_Email" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" ref={loginEmailRef} required/>
                                </Form.Group>

                                <Button className="w-100 " type="submit" disabled={pageIsLoading}>Reset Password</Button>
                            </Form>
                            <div className="w-100 mt-3 text-center">
                            <Link to='./login'>Go back to log in</Link>
                        </div>
                        </Card.Body> 
                    </Card>
                    
                </div>
            </Container>
        </>
    )
}

export default ForgotPassword
