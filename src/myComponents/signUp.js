import {React, useRef} from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthContext} from '../authorization';


function SignUpForm () {

    // These refs are used so I can get the value of the Email & Passwords in the handle submission function
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpPasswordConfRef = useRef();
    const {signUserUp} = useAuthContext();

    function handleFormSubmission (event) {
        event.preventDefault();

        try {
            signUserUp(signUpEmailRef.current.value, signUpPasswordRef.current.value)
            console.log('The sign in was a success')
        } catch {
            console.log('Sign in did not work')
        }
        
    }

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "25em"}}>
                    <Card onSubmit={handleFormSubmission}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
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

                                <Button className="w-100 " type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">Already have an account? Log in</div>
                </div>
            </Container>
        </>
    )
}

export default SignUpForm;
