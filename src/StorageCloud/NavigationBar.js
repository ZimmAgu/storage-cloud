import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <Navbar bg="light" expand={'sm' | 'md' | 'lg' | 'xl'} style={{paddingRight: '1em', paddingLeft: '1em'}}>
            <Navbar.Brand>
                <Link to='/' style={{ color:'black', textDecoration: 'none' }}>
                    The Z Cloud
                </Link>
            </Navbar.Brand>

            <Navbar.Brand>
                <Link to='/user_profile' style={{ color:'black', textDecoration: 'none' }}>
                    Profile
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar
