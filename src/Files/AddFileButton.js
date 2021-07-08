// React Imports
import React, { useState } from 'react'
import ReactDom from 'react-dom'

// Boostrap Imports
import { ProgressBar, Toast } from 'react-bootstrap'

// Firebase Imports
import { userCollections, storage } from '../Firebase/firebase' 
import { useAuthContext } from '../Firebase/authorization'

// Folder Imports
import { RootFolder } from '../Folders/FolderUseLogic'

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

// NPM Imports
import { v4 as uuidv4 } from 'uuid';



function AddFileButton({ currentFolder }) {
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const { currentUser } = useAuthContext()

    function handleFileUpload (event) {
        console.log('yuyup')

        const file = event.target.files[0]

        const generatedId = uuidv4();
        setUploadingFiles(previousUploadingFiles => [ 
            ...previousUploadingFiles,
            {
                id: generatedId,
                name: file.name,
                progress: 0,
                error: false
            }
        ])


        if (currentFolder == null && file == null ) return;     // If there is no folder or file when present when this function is ran it will do nothing

        const filePath = (currentFolder === RootFolder)         //  If the current folder is the root folder, then there will be no current folder name in the file url path. Otherwise there will be
            ? `${currentFolder.path.join('/')}/${file.name}`    // The join method will get all of the folders in the path and separate them with a backslash. That way the url of the uploaded file contains all of the folders in its path
            : `${currentFolder.path.join('/')}/${currentFolder.name}/${file.name}`

        const storageRef = storage.ref(`/files/${currentUser.id}/${filePath}`)  // Creates a reference to the full path of the uploaded file

        const uploadTask = storageRef.put(file) // "puts" the file in the storage reference which uploads the file to firebase storage


        uploadTask.on('state_changed', (snapshot) => { 
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            console.log('Upload is ' + progress + '% done');

           
            setUploadingFiles(previousUploadingFiles => {   // Sets the uploading progress state to the current progress of the state
                return previousUploadingFiles.map(doc => { 
                    if (doc.id === generatedId) {
                        return {...doc, progress: progress}
                    }

                    return doc
                })
            })
        }, (error) => {
            
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => { // Retrieves the download url of the uploaded picture
                console.log('File available at', downloadURL);
                
                setUploadingFiles(previousUploadingFiles => {       // When the upload is done, the current id of the document is set to something other than its generated id so the toast disappears
                    return previousUploadingFiles.filter(doc => {
                        return doc.id !== generatedId;
                    })
                })

                userCollections.files
                    .where('name', '==', file.name)
                    .where('userId', '==', currentUser.uid)
                    .where('folderId', '==', currentFolder.id)
                    .get()
                    .then(doc => {  // Checks if a the file being updated exists already. If the file already exist, then it is updated. If the file does not yet exiast, then a new file is created
                        const existingFile = doc.docs[0]

                        if (existingFile) {
                            existingFile.ref.update({url: downloadURL})
                            console.log('File has been updated')
                        } else {
                            console.log('Adding ')
                            userCollections.files.add({
                                url: downloadURL,
                                name: file.name,
                                createdAt: userCollections.timeStamp(),
                                folderId: currentFolder.id,
                                userId: currentUser.uid
                            }) 
                        }
                    })
            });
        });
    }

    return (
        <>
            <label className="btn btn-outline-primary" style={{marginRight: '1em'}}>
                <FontAwesomeIcon icon={faFileUpload}/>
                <input 
                    type="file"
                    onChange={handleFileUpload}
                    style={{position: "absolute", right: "25000000%", opacity: "0"}}
                />
            </label>

            {uploadingFiles.length > 0 &&
                ReactDom.createPortal(
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '1rem',
                            right: '1rem'
                        }}
                    >
                        {uploadingFiles.map(doc => ( 
                            <Toast key={doc.id}>
                                <Toast.Header
                                    closeButton={doc.error}
                                >
                                    {doc.name}
                                </Toast.Header>

                                <Toast.Body>
                                    <ProgressBar 
                                        animated={!doc.error}
                                        variant={doc.error ? "danger" : "primary"}
                                        now={doc.error ? 100 : doc.progress}
                                        label={
                                            doc.error
                                            ? "Error"
                                            : `${Math.round(doc.progress)}%`
                                        }
                                    />
                                </Toast.Body>
                            </Toast>
                        ))}
                    </div>,
                    document.body
                )
            }
        </>
    )
}

export default AddFileButton
