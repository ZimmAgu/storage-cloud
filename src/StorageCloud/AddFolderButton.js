import {React, useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
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

            <Modal show={show} onHide={handleClose}>yo</Modal>
        </>
    )
}

export default AddFolderButton
