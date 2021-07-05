import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'





function AddFileButton({ currentFolder }) {

    function handleFileUpload (event) {
        console.log('yuyup')
        const file = event.target.files[0]

        if (currentFolder == null && file == null ) return;     // If there is no folder or file when present when this function is ran it will do nothing
    }


    return (
        <label className="btn btn-outline-primary" style={{marginRight: '1em'}}>
            <FontAwesomeIcon icon={faFileUpload}/>
            <input 
                type="file"
                onChange={handleFileUpload}
                style={{position: "absolute", right: "25000000%", opacity: "0"}}
            />
        </label>
        
    )
}

export default AddFileButton
