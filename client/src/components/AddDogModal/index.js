import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DogForm from '../DogForm';
import AddExistingDogForm from '../AddExistingDogForm'


function Example() {
    const [breeds] = useState([]);
    const [toggle, setToggle] = useState('Add a New Dog');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = (event) => {
        event.preventDefault();
        setToggle(
            toggle === 'Add a New Dog' ? 'Add Existing Dog' : 'Add a New Dog'
        );
    }

    const renderForm = () => {
        if (toggle === 'Add a New Dog') {
            return <AddExistingDogForm />
        } else if (toggle === 'Add Existing Dog') {
            return <DogForm breeds={breeds} />
        }
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
                    {renderForm()}
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