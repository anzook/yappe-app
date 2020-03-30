import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import './style.css';
import UpdateUserForm from '../UpdateUserForm';



function SettingsModal() {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className='modal-btn' onClick={handleShow}>
                <FontAwesomeIcon icon={ faCog }/>
                <span className='span'> User Settings</span>
            </div>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body>
                <UpdateUserForm close={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SettingsModal;