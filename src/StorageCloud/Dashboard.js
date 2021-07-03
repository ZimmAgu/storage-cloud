import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavigationBar from './NavigationBar'
import {FolderUseLogic} from './FolderUseLogic'
import Folder from './Folder'


function Dashboard() {
    const { folder, childFolders } = FolderUseLogic('', 'nvn5Q32KrOawyF4xpHyl')
    // console.log('Folder from dashboard: ' + JSON.stringify(folder))
    console.log('Child Folder from dashboard: ' + childFolders.length)

    const child = childFolders[1]
    console.log(child)

    return (
        <>
            <NavigationBar/>
            

            <Container fluid>
                <AddFolderButton currentFolder={folder}/>
                {childFolders.length > 0 && <Folder folder={child}/> }
            </Container>
        </>
    )
}

export default Dashboard
