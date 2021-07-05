import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function File({ file }) {
    console.log('File from File ')
    return (
        <a 
            href={file.url}
            target="_blank"
            className="btn btn-outline-secondary text-truncate w-100"
        >
            <FontAwesomeIcon icon={ faFile } style={{marginRight: "1em"}}/>
            {file.name}
        </a>
    )
}

export default File
