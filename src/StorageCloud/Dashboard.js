import React from 'react'
import {Container} from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavigationBar from './NavigationBar'


function Dashboard() {
    return (
        <>
            <NavigationBar/>

            <Container fluid>
                <AddFolderButton />
            </Container>
        </>
    )
}

export default Dashboard
