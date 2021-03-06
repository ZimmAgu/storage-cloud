import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../Firebase/authorization';
import { Link } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

function UpdatePassword () {
    // These refs are used so I can get the value of the Email & Passwords in the handle submission function
    const updatePasswordRef = useRef();
    const updatePasswordConfRef = useRef();

    const {updateUserPassword} = useAuthContext(); // Firebase functionality imported from authorization.js to add a new user to the database
    const [formMessage, setFormMessage] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
    const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering
    
    function handleFormSubmission (event) {
        event.preventDefault()

        if (updatePasswordRef.current.value !== updatePasswordConfRef.current.value) {
            setFormMessage('Passwords do not match')
            return
        }

        updateUserPassword(updatePasswordRef.current.value)
            .then(() => {
                setLoadingStatus(true);
                setFormMessage('Your password has been changed')
            })
            .catch(() => {
                setFormMessage('Could not change password')
            })
        setLoadingStatus(false);
    } 

    return (
        <CenteredContainer>
            <Card onSubmit={handleFormSubmission}>
                <Card.Body>
                    <h2 className="text-center mb-4">Change Password</h2>
                    {formMessage && <Alert variant="danger">{formMessage}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" id="update_Password_Form_Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your new password" ref={updatePasswordRef} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" id="update_Password_Form_Password_Conf">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your new password" ref={updatePasswordConfRef} required/>
                        </Form.Group>

                        <Button className="w-100 " type="submit" disabled={pageIsLoading}>Change Password</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to='./user_profile'>Go back</Link>
            </div>
        </CenteredContainer>
    )
}

export default UpdatePassword
