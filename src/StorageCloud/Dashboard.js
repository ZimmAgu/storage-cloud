// React Imports
import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom";

// Storage Cloud Imports
import AddFolderButton from '../Folders/AddFolderButton'
import NavigationBar from './NavigationBar'

// Folders Imports
import { FolderUseLogic} from '../Folders/FolderUseLogic'
import Folder from '../Folders/Folder'
import Breadcrumbs from '../Folders/Breadcrumbs';
  

function Dashboard() {
    const { folderId } = useParams()
    console.log(folderId)
    const { folder, childFolders } = FolderUseLogic(null, folderId)



    return (
        <>
            <NavigationBar/>
            

            <Container fluid>
                <div className='d-flex mt-2'>
                    <Breadcrumbs currentFolder={folder}/>
                    <AddFolderButton currentFolder={folder}/>
                </div>
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
