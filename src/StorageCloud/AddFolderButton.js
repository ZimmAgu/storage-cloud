import {React, useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

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
                <Modal.Body>
                    <Form>       
                        <Form.Group>
                            <Form.Label>New Folder</Form.Label>
                            <Form.Control type="text" placeholder="Enter the name of your folder"></Form.Control>
                        </Form.Group>
                    </Form>    
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFolderButton
