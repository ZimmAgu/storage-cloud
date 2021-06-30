import {React, useRef, useState} from 'react';
import {Alert, Button, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthContext} from '../Firebase/authorization';
import {Link, useHistory} from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

function SignUpForm () {

    // These refs are used so I can get the value of the Email & Passwords in the handle submission function
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpPasswordConfRef = useRef();

    const {signUserUp} = useAuthContext(); // Firebase functionality imported from authorization.js to add a new user to the database
    const [formError, setFormError] = useState(''); // Will be used to print out an error message to the screen if something goes wrong with sign in
    const [pageIsLoading, setLoadingStatus] = useState(false); // These states will be used to check whether or not the page is still rendering
    const history = useHistory()


    function handleFormSubmission (event) {
        event.preventDefault();

        if (signUpPasswordRef.current.value !== signUpPasswordConfRef.current.value) { // If the password & the password confirmation are different in any way the function will end without creating an account for the user
            setFormError('The passwords do not match'); 
            return;
        }

        
  

        signUserUp(signUpEmailRef.current.value, signUpPasswordRef.current.value) // Creates the user accout
            .then(() => {
                setFormError('');
                setLoadingStatus(true);
                console.log('The sign up was a success'); 
                history.push('/user_profile') // Redirects to the root page of the document
            })
            .catch(() => {
                setFormError('Sign in did not work');
                console.log('Sign in did not work');
            })
        
        setLoadingStatus(false);
    }

    return (
        <CenteredContainer>
            <Card onSubmit={handleFormSubmission}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {formError && <Alert variant="danger">{formError}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" id="signup_Form_Email" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={signUpEmailRef} required/>
                        </Form.Group>


                        <Form.Group className="mb-3" id="signup_Form_Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={signUpPasswordRef} required/>
                        </Form.Group>

                        <Form.Group className="mb-4" id="signup_Password_Confirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" ref={signUpPasswordConfRef} required/>
                        </Form.Group>

                        <Button className="w-100 " type="submit" disabled={pageIsLoading}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="./login">Log in</Link>
            </div>
        </CenteredContainer>
    )
}

export default SignUpForm;
