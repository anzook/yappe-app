import React, { useState } from 'react';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import './style.css';
import UpdateUserForm from '../UpdateUserForm';



function SettingsModal() {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderAddDogIcon = () => (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
                <FontAwesomeIcon icon={ faCog }/>
        </OverlayTrigger>
    );

   const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                User Settings
            </Tooltip>
        );
    }

    return (
        <>
            <div className='modal-btn' onClick={handleShow}>
            {renderAddDogIcon() } 
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