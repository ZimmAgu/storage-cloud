// React Imports
import React from 'react'
import {ButtonGroup, Dropdown} from 'react-bootstrap'

import { userCollections } from '../Firebase/firebase' 

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function File({ file }) {
    function handleDeletion () {  
        userCollections.files.doc(file.id).delete()
    }

    return (
        <Dropdown as={ButtonGroup}>
            <a 
                href={file.url}
                target="_blank"
                className="btn btn-outline-secondary text-truncate w-100"
            >
                <FontAwesomeIcon icon={ faFile } style={{marginRight: "1em"}}/>
                {file.name}
            </a>

            <Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic" />
             <Dropdown.Menu>
                <Dropdown.Item onClick={handleDeletion}>Delete File</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default File
