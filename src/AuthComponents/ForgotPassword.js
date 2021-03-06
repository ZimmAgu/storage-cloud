import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../Firebase/authorization';
import { Link } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

function ForgotPassword() {
    // These refs are used so I can get the value of the Email & Passwords in the handle submission function
    const loginEmailRef = useRef();

    const {resetUserPassword} = useAuthContext()

    const [formMessage, setFormMessage] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
    const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering

    function handlePasswordReset (event) {
        event.preventDefault()
        
        resetUserPassword(loginEmailRef.current.value)
            .then(() => {
                setLoadingStatus(true)
                setFormMessage('Your password has been reset. Check your mailbox for further instructions');
            })
            .catch(() => {
                setFormMessage('Could not reset your password');
            })
    }
    
    return (
        <CenteredContainer>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {formMessage && <Alert variant="danger">{formMessage}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" id="forgot_Password_Form_Email" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={loginEmailRef} required/>
                        </Form.Group>

                        <Button className="w-100 " onClick={handlePasswordReset} disabled={pageIsLoading}>Reset Password</Button>
                    </Form>
                    <div className="w-100 mt-3 text-center">
                    <Link to='./login'>Go back to log in</Link>
                </div>
                </Card.Body> 
            </Card> 
        </CenteredContainer>
    )
}

export default ForgotPassword
