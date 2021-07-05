// React Imports
import React from 'react'

// Firebase Imports
import { storage } from '../Firebase/firebase' 
import { useAuthContext } from '../Firebase/authorization'

// Folder Imports
import { RootFolder } from '../Folders/FolderUseLogic'

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'





function AddFileButton({ currentFolder }) {

    const { currentUser } = useAuthContext()

    function handleFileUpload (event) {
        console.log('yuyup')
        const file = event.target.files[0]

        if (currentFolder == null && file == null ) return;     // If there is no folder or file when present when this function is ran it will do nothing

        const filePath = (currentFolder === RootFolder)         //  If the current folder is the root folder, then there will be no current folder name in the file url path. Otherwise there will be
            ? `${currentFolder.path.join('/')}/${file.name}`    // The join method will get all of the folders in the path and separate them with a backslash. That way the url of the uploaded file contains all of the folders in its path
            : `${currentFolder.path.join('/')}/${currentFolder.name}/${file.name}`

        const storageRef = storage.ref(`/files/${currentUser.id}/${filePath}`)  // Creates a reference to the full path of the uploaded file

        const uploadTask = storageRef.put(file) // "puts" the file in the storage reference which uploads the file to firebase storage
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
