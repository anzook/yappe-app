import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DogForm from '../DogForm';
import AddExistingDogForm from '../AddExistingDogForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import './style.css';


function AddDogModal() {
    const [breeds] = useState([]);
    const [toggle, setToggle] = useState('Add New Dog');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = (event) => {
        event.preventDefault();
        setToggle(
            toggle === 'Add New Dog' ? 'Add Existing Dog' : 'Add New Dog'
        );
    }

    const renderAddDogIcon = () => (
        <div>
            <Breakpoint customQuery="(max-width: 1026px)">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <div>
                        <FontAwesomeIcon icon={faPaw} />
                        <h6>Add Dog</h6>
                    </div>
                </OverlayTrigger>
            </Breakpoint>

            <Breakpoint customQuery="(min-width: 1027px)">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <FontAwesomeIcon icon={faPaw} />
                </OverlayTrigger>
            </Breakpoint>
        </div>
    );

    const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Add Dog
            </Tooltip>
        );
    }

    const renderForm = () => {
        if (toggle === 'Add New Dog') {
            return <AddExistingDogForm close={handleClose} />
        } else if (toggle === 'Add Existing Dog') {
            return <DogForm breeds={breeds} />
        }
    }

    return (
        <>
            <div className='modal-btn' onClick={handleShow}>
                {renderAddDogIcon()}
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header id="modal-header" closeButton>
                    <Modal.Title>Add Dog</Modal.Title>
                </Modal.Header>

                <Modal.Body id="modal-body">
                    {renderForm()}
                </Modal.Body>
                <Modal.Footer id="modal-footer">
                    <Button className="toggle-button" variant="outline-success" onClick={handleToggle}>
                        {toggle}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddDogModal;