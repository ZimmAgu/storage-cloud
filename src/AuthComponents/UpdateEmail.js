import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../Firebase/authorization';
import { Link } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

function UpdateEmail () {
    // These refs are used so I can get the value of the Email & Passwords in the handle submission function
    const updateEmailRef = useRef();

    const {updateUserEmail} = useAuthContext(); // Firebase functionality imported from authorization.js to add a new user to the database
    const [formMessage, setFormMessage] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
    const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering

    function handleFormSubmission (event) {
        event.preventDefault()

        updateUserEmail(updateEmailRef.current.value)
            .then(() => {
                setLoadingStatus(true);
                setFormMessage('Your email has been changed')
            })
            .catch(() => {
                setFormMessage('Could not change email')
            })
        setLoadingStatus(false);
    } 


    return (
        <CenteredContainer>
            <Card onSubmit={handleFormSubmission}>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Email</h2>
                    {formMessage && <Alert variant="danger">{formMessage}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" id="update_Email_Form_Email" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your new email address" ref={updateEmailRef} required/>
                        </Form.Group>
                        
                        <Button className="w-100 " type="submit" disabled={pageIsLoading}>Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to='./user_profile'>Go back</Link>
            </div>
        </CenteredContainer>
    )
}

export default UpdateEmail
