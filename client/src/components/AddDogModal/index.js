import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DogForm from '../DogForm'


function Example() {
    const [breeds] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <DogForm
                        breeds={breeds}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Example;