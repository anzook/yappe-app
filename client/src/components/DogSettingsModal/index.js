import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';
import DogSettingsForm from '../DogSettingsForm';


function DogSettingsModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h6 className='add-act-modal-btn' onClick={handleShow}>
                Dog Settings
            </h6>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>Settings</Modal.Header>
                <Modal.Body>
                    < DogSettingsForm close={handleClose} user={props.user} pet={props.pet}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DogSettingsModal;