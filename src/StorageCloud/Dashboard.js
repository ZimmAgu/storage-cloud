import React from 'react'
import NavigationBar from './NavigationBar'
import {Container} from 'react-bootstrap'


function Dashboard() {
    return (
        <>
            <NavigationBar/>

            <Container fluid>
                This is where stuff will go
            </Container>
        </>
    )
}

export default Dashboard
