// React Imports
import React, { useRef, useState }  from 'react'
import { Alert, Button, Card, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// AuthComponents Imports
import CenteredContainer from './CenteredContainer'

// Firebase Imports
import { useAuthContext } from '../Firebase/authorization'

function UpdateDisplayName() {
    const { currentUser } = useAuthContext()
    const updateNameRef = useRef()

    const [formMessage, setFormMessage] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
    const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering



    function handleFormSubmission (event) {
        event.preventDefault();

        try {
            setLoadingStatus(true);
            currentUser.updateProfile({displayName: updateNameRef.current.value})
            setFormMessage('Your display name has been updated')
        } catch {
            setFormMessage('There was an error changing your display name')
        }

        setLoadingStatus(false);
        
    }

    return (
        <CenteredContainer>
            <Card onSubmit={handleFormSubmission}>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Name</h2>
                    {formMessage && <Alert variant="danger">{formMessage}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" id="update_Name_Form" >
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" ref={updateNameRef} required/>
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

export default UpdateDisplayName
