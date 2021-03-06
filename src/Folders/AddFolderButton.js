// React Imports 
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

//Firebase Imports
import { userCollections } from '../Firebase/firebase'
import { useAuthContext } from '../Firebase/authorization'

// Folders Imports
import { RootFolder } from './FolderUseLogic'

// Font Awesome Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faTimes } from '@fortawesome/free-solid-svg-icons'



function AddFolderButton({ currentFolder }) {
    const [show, setShow] = useState(false); // Used to show and hide the modal
    const [folderName, setFolderName] = useState(''); // Sets the name of the folder
    const { currentUser } = useAuthContext();


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    function handleInputChange (event) { // Changes the value of the create folder input every time the user enters in a character
        setFolderName(event.target.value);
    }

    function handleSubmission (event) {
        event.preventDefault();

        if (currentFolder == null) return;

        const folderPath = [...currentFolder.path];     // Stores all of the previous folders and their

        if (currentFolder !== RootFolder) {             // Pushes the nmame and id of the current folder to the folderPath array
            folderPath.push({
                name: currentFolder.name,
                id: currentFolder.id
            })
        }


        userCollections.folders.add({
            name: folderName,                           // Name of the folder
            userId: currentUser.uid,                    // Id of the user that created the folder
            parentFolderId: currentFolder.id,           // Id of the folder that is the direct parent of the current folder 
            createdAt: userCollections.timeStamp(),     // Exact time when the folder was created
            path: folderPath                            // The path of all of the folders that came before the current folder
        })

        setFolderName('');
        handleClose();
    }
    
    return (
        <>
            <Button variant='outline-primary' onClick={handleShow} size='md'>
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmission}> 
                    <Modal.Header>
                        New Folder
                        <FontAwesomeIcon icon={faTimes} onClick={handleClose} style={{cursor:'pointer'}} size='lg'/>
                    </Modal.Header>

                    <Modal.Body>   
                            <Form.Group>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter the name of your folder" 
                                    value={folderName} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="submit">
                            Add Folder
                        </Button>
                    </Modal.Footer>
                </Form>   
            </Modal>
        </>
    )
}

export default AddFolderButton
