import {React, useState, useRef} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

function AddFolderButton() {
    const [show, setShow] = useState(false); // Used to show and hide the modal
    const [folderName, setFolderName] = useState('') // Sets the name of the folder


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleInputChange (event) { // Changes the value of the create folder input every time the user enters in a character
        setFolderName(event.target.value)
    }

    function handleSubmission (event) {
        event.preventDefault()
        setFolderName('')
        handleClose()
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
