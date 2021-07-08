// React Imports
import React from 'react'
import { Link } from 'react-router-dom'
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap'

// Font Awesom Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


function Folder({folder}) {
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
                <Button variant="outline-secondary"  className="text-truncate w-100" style={{ minWidth: "8em", textAlign: "left" }}>
                    
                    <FontAwesomeIcon icon={faFolder} style={{ marginRight: "0.5em" }}/>
                    {folder.name}
                </Button>
            </Link>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Folder
