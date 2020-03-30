import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import CareTakersTable from '../CareTakersTable';


function CaretakersModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='modal-btn' onClick={handleShow}>
                <FontAwesomeIcon icon={ faUserPlus }/>
                <span className='span'> Caretakers</span>
            </div>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                < CareTakersTable />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CaretakersModal;