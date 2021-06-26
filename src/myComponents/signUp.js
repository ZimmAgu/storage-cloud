import {React, useRef} from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUpForm () {

    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpPasswordConfRef = useRef();

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "25em"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <Form>
                                <Form.Group className="mb-3" id="signup_Form_Email" ref={signUpEmailRef}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                </Form.Group>


                                <Form.Group className="mb-3" id="signup_Form_Password" ref={signUpPasswordRef}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required/>
                                </Form.Group>

                                <Form.Group className="mb-4" id="signup_Password_Confirmation" ref={signUpPasswordConfRef}>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" required/>
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
