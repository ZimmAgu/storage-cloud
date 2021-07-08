// React Imports
import React from 'react'
import { Link } from 'react-router-dom'
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap'
import { userCollections } from '../Firebase/firebase' 
import { useAuthContext } from '../Firebase/authorization'

// Font Awesom Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


function Folder({folder}) {
    const { currentUser } = useAuthContext()


    function handleDeletion () {
        console.log('Folder clicked on ', folder)
        console.log('folder.name ', folder.name)
        console.log('current user id ', currentUser.uid)
        console.log('Folder id ', folder.id)

        userCollections.folders.doc(folder.id)
            .delete()
            .then(() => {
                console.log('Document has been deleted')
            })
    }

    return (
        <>
            <Dropdown as={ButtonGroup}>
            <Link 
                to={{
                    pathname: `/folder/${folder.id}`,
                    state: {folder: folder}
                }} 
                style={{textDecoration: 'none'}}
            >
                <Button variant="outline-secondary"  className="text-truncate w-100" style={{ minWidth: "8em", maxWidth: "8em", textAlign: "left" }}>
                    
                    <FontAwesomeIcon icon={faFolder} style={{ marginRight: "0.5em" }}/>
                    {folder.name}
                </Button>
            </Link>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleDeletion}>Delete Folder</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Folder
