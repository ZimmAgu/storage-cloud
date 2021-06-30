import {React, useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

function AddFolderButton() {
    const [show, setShow] = useState();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <>
            <Button variant='outline-primary' onClick={handleShow}>
                This is my button
            </Button>

            <Modal show={show} onHide={handleClose}>yo</Modal>
        </>
    )
}

export default AddFolderButton
