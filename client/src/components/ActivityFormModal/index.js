import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';
import ActivitiesForm from '../ActivitiesForm';


function ActivitiesFormModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Activity
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    < ActivitiesForm />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ActivitiesFormModal;