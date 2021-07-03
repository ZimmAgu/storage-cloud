import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


function Folder({folder}) {
    return (
        <>
            <Link to='./'>
                <FontAwesomeIcon icon={faFolder} style={{ marginRight: "0.5em" }}/>
                {folder.name}
            </Link>
        </>
    )
}

export default Folder
