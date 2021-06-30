import React from 'react'

import {useAuthContext} from '../Firebase/authorization'
import {Button, Card, Container} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CenteredContainer from './CenteredContainer'

function UserProfile() {
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
                <CenteredContainer>
                        <Card>
                            <Card.Body>
                                <h1>Hello {currentUser.email}</h1>
                            </Card.Body>
                            
                            <Link to='./update_email'>
                                <Button className="w-100 text-center mb-2">
                                    Update Email
                                </Button>
                            </Link>
                            
                            <Link to='./change_password'>
                                <Button className="w-100 text-center mt-3 mb-3">
                                    Change Password
                                </Button>
                            </Link>
                        </Card>
                        <div>
                            <Button className="w-100 text-center mt-3" onClick={handleLogOut}>
                                Log Out
                            </Button>
                        </div>
                </CenteredContainer>
            }        
        </>
    );
}

export default UserProfile
