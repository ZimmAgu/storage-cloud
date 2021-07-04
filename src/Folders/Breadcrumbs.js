// React Imports
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'

// Folders Imports
import { RootFolder } from './FolderUseLogic'


function Breadcrumbs({ currentFolder }) {
    let folderPath = (currentFolder === RootFolder) ? [] : [RootFolder] // If the current folder is the root folder, then the folder path is an empty array, otherwise the folder path starts with the Root Folder

    if (currentFolder) { // If you have a current folder this will set the path of the folder
        folderPath = [...folderPath, ...currentFolder.path]
    }

    return (
        
        <Breadcrumb className="flex-grow-1">
            {folderPath.map((folder) => ( 
                <Breadcrumb.Item 
                    className="text-truncate" 
                    key={folder.id}
                    style={{maxWidth: '10em'}} 
                >
                    <Link to={folder.id ? `/folder/${folder.id}` : '/'}> 
                        {folder.name}
                    </Link>
                </Breadcrumb.Item>
                
            ))}  
            {currentFolder && ( 
                <Breadcrumb.Item 
                    className="text-truncate" 
                    style={{maxWidth: '10em'}} 
                    active
                >
                    {currentFolder.name}
                </Breadcrumb.Item>
            )}    
        </Breadcrumb>
    )
}

export default Breadcrumbs
