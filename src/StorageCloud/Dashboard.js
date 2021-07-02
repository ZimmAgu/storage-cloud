import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavigationBar from './NavigationBar'
import {FolderUseLogic} from './FolderUseLogic'


function Dashboard() {
    const {folder} = FolderUseLogic()

    return (
        <>
            <NavigationBar/>

            <Container fluid>
                <AddFolderButton currentFolder={folder}/>
            </Container>
        </>
    )
}

export default Dashboard
