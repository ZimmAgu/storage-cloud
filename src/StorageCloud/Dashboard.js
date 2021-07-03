import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavigationBar from './NavigationBar'
import {FolderUseLogic} from './FolderUseLogic'
import Folder from './Folder'


function Dashboard() {
    const { folder, childFolders } = FolderUseLogic('', 'nvn5Q32KrOawyF4xpHyl')



    return (
        <>
            <NavigationBar/>
            

            <Container fluid>
                <AddFolderButton currentFolder={folder}/>
                
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFolders.map(doc => ( 
                            <div
                                key={doc.id}
                                style={{ minWidth:'10em', maxWidth:'10em' }}
                                className='p-2'
                            >
                                <Folder folder={doc}/>
                            </div>
                        ))}
                    </div>
                )}  
                    
                
            </Container>
        </>
    )
}

export default Dashboard
