import React from 'react'

import {useAuthContext} from '../firebaseAuth/authorization'
import {Alert, Button, Card, Container} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    const {currentUser, logUserOut} = useAuthContext()
    const history = useHistory();

    function handleLogOut () {
        logUserOut().then(() => {
            history.push('./login')
        })
        
    }

    return (
        <>
            {currentUser &&
                <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}> 
                    <div className="w-100" style={{maxWidth: "25em"}}>
                        <Card>
                            <Card.Body>
                                <h1>Hello {currentUser.email}</h1>
                            </Card.Body>
                        </Card>
                        <div>
                            <Button className="w-100 text-center mt-2" onClick={handleLogOut}>
                                Log Out
                            </Button>
                        </div>
                    </div>
                </Container>   
            }        
        </>
    );
}

export default Homepage
