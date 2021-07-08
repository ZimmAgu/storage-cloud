// React Imports
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// AuthComponents Imports
import CenteredContainer from './CenteredContainer'

// Firebase Imports
import { useAuthContext } from '../Firebase/authorization'

// Storage Cloud Imports
import NavigationBar  from '../StorageCloud/NavigationBar'


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
            <NavigationBar />
            {currentUser &&
                <CenteredContainer>
                        <Card className='p-3'>
                            <Card.Body className="text-center">
                                <h1>Hello {currentUser.displayName}</h1>
                            </Card.Body>
                            
                            <Link to='./update_display_name'>
                                <Button className="w-100 text-center mb-2">
                                    Update Display Name
                                </Button>
                            </Link>

                            <Link to='./update_email'>
                                <Button className="w-100 text-center mt-3 mb-2">
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
