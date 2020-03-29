import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DogForm from '../DogForm';
import AddExistingDogForm from '../AddExistingDogForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import './style.css';


function ActivityLog() {
    const [actions] = useState([]);
    const [toggle, setToggle] = useState('Activity Log');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = (event) => {
        event.preventDefault();
        setToggle(
            toggle === 'Activity Log' ? 'Add Existing Dog' : 'Add New Dog'
        );
    }

    const renderForm = () => {
        if (toggle === 'Activity Log') {
            return <AddExistingDogForm close={handleClose}/>
        } else if (toggle === 'Add Existing Dog') {
            return <DogForm breeds={breeds} />
        }
    }

    return (
        <>
            <div className='modal-btn' onClick={handleShow}>
                <FontAwesomeIcon icon={ faPaw }/>
                <span className='span'>Add Dog</span>
            </div>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Dog</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {renderForm()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleToggle}>
                        {toggle}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddDogModal;