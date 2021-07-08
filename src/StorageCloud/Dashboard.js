// React Imports
import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams, useLocation } from "react-router-dom";

// Files Imports
import AddFileButton from '../Files/AddFileButton';
import File from '../Files/File';

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
    const { folder, childFolders, childFiles } = FolderUseLogic(state.folder, folderId);

    console.log(childFiles)

    return (
        <>
            <NavigationBar/>
            

            <Container fluid>
                <div className='d-flex mt-2'>
                    <Breadcrumbs currentFolder={folder}/>
                    <AddFileButton currentFolder={folder}/>
                    <AddFolderButton currentFolder={folder}/>
                </div>
                
                {childFolders.length > 0 && <p style={{marginLeft: '1em', color: '#5F6367'}}>Folders</p>}

                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFolders.map(doc => ( 
                            <div
                                key={doc.id}
                                className='p-2'
                            >
                                <Folder folder={doc}/>
                            </div>
                        ))}
                    </div>
                )}

                {childFolders.length > 0 && childFiles.length > 0 && <hr/>}  
                
                {childFiles.length > 0 && <p style={{marginLeft: '1em', color: '#5F6367'}}>Files</p>}

                {childFiles.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFiles.map(doc => ( 
                            <div
                                key={doc.id}
                                style={{ minWidth:'10em', maxWidth:'10em' }}
                                className='p-2'
                            >
                                <File file={doc}/>
                            </div>
                        ))}
                    </div>
                )}  
            </Container>
        </>
    )
}

export default Dashboard
