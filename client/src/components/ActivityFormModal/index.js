import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';
import ActivitiesForm from '../ActivitiesForm';


function ActivitiesFormModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='add-act-modal-btn' onClick={handleShow}>
                Add Activity
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    < ActivitiesForm close={handleClose} user={props.user} pet={props.pet}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ActivitiesFormModal;