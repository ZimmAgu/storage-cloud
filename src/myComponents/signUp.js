import React from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUpForm () {
    return (
        <>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="signup_Form_Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>


                        <Form.Group controlId="signup_Form_Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>

                        <Form.Group controlId="signup_Password_Confirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required/>
                        </Form.Group>

                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default SignUpForm;
