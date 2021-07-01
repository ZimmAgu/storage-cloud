import {React, useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

function AddFolderButton() {
    const [show, setShow] = useState();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <>
            <Button variant='outline-primary' onClick={handleShow} size='md'>
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                     New Folder
                     <FontAwesomeIcon icon={faTimes} onClick={handleClose} style={{cursor:'pointer'}} size='lg'/>
                </Modal.Header>

                <Modal.Body>
                    <Form>       
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter the name of your folder"></Form.Control>
                        </Form.Group>
                    </Form>    
                </Modal.Body>

                <Modal.Footer>
                    <Button>
                        Add Folder
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFolderButton
