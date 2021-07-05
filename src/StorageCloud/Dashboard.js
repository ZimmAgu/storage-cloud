// React Imports
import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams, useLocation } from "react-router-dom";

// Files Imports
import AddFileButton from '../Files/AddFileButton';

// Folders Imports
import { FolderUseLogic} from '../Folders/FolderUseLogic'
import Folder from '../Folders/Folder'
import Breadcrumbs from '../Folders/Breadcrumbs';

// Storage Cloud Imports
import AddFolderButton from '../Folders/AddFolderButton'
import NavigationBar from './NavigationBar'


  

function Dashboard() {
    const { folderId } = useParams();
    console.log(folderId);

    const { state = {} } = useLocation();
    const { folder, childFolders } = FolderUseLogic(state.folder, folderId);



    return (
        <>
            <NavigationBar/>
            

            <Container fluid>
                <div className='d-flex mt-2'>
                    <Breadcrumbs currentFolder={folder}/>
                    <AddFileButton />
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
