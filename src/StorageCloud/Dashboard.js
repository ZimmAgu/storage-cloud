import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavigationBar from './NavigationBar'
import {FolderUseLogic} from './FolderUseLogic'


function Dashboard() {
    const { folder } = FolderUseLogic('', 'nvn5Q32KrOawyF4xpHyl')
    console.log('Folder from dashboard: ' + folder)

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
