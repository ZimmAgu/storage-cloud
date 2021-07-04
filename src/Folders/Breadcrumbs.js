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
            {folderPath.map((folder, index) => ( 
                <Breadcrumb.Item 
                    className="text-truncate" 
                    key={folder.id}
                    linkAs={Link}
                    linkProps={{
                        to: { 
                            pathname: folder.id ? `/folder/${folder.id}` : '/',     // Sets the link of each breadcrumb to its specific folder
                            state: {folder: {folder, path: folderPath.slice(1, index)}}     // Passes state from the first parent in a path to the most current element. This will persist the location of the route. This way the breadcrumbs will not re-render every time the user clicks them
                        }
                    }}
                    style={{maxWidth: '10em'}} 
                >
                    
                        {folder.name}
                   
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
