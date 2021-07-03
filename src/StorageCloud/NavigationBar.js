import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <Navbar bg="light" expand={'sm' | 'md' | 'lg' | 'xl'}>
            <Navbar.Brand>
                <Link to='/' style={{ color:'black', textDecoration: 'none' }}>
                    ZA Cloud
                </Link>
            </Navbar.Brand>

            <Navbar.Brand>
                <Link to='./user_profile' style={{ color:'black', textDecoration: 'none' }}>
                    Profile
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar
