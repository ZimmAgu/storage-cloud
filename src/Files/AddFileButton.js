import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

function AddFileButton({ currentFolder }) {
    return (
        <label className="btn btn-outline-primary" style={{marginRight: '1em'}}>
            <FontAwesomeIcon icon={faFileUpload}/>
            <input 
                type="file"
                style={{position: "absolute", right: "25000000%", opacity: "0"}}
            />
        </label>
        
    )
}

export default AddFileButton
