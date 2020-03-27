import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DogForm from '../DogForm';
import AddExistingDogForm from '../AddExistingDogForm'


function Example() {
    const [breeds] = useState([]);
    const [toggle, setToggle] = useState('Add a New Dog')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = (event) => {
        event.preventDefault();
        console.log('I was hit!')
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Dog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Dog</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <DogForm breeds={breeds} />
                    <AddExistingDogForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleToggle}>
                        {toggle}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;