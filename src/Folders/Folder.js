import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


function Folder({folder}) {
    return (
        <>
            <Link 
                to={{
                    pathname: `/folder/${folder.id}`,
                    state: {folder: folder}
                }} 
                style={{textDecoration: 'none'}}
            >
                <Button variant="outline-secondary"  className="text-truncate w-100" style={{ textAlign: "left" }}>
                    <FontAwesomeIcon icon={faFolder} style={{ marginRight: "0.5em" }}/>
                    {folder.name}
                </Button>
            </Link>
        </>
    )
}

export default Folder
