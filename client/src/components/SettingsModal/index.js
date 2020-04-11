import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import UpdateUserForm from '../UpdateUserForm';



function SettingsModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderAddDogIcon = () => (
        <div>
            <Breakpoint customQuery="(max-width: 991px)">
                    <div>
                        <FontAwesomeIcon icon={faCog} />
                        <h6>Settings</h6>
                    </div>
            </Breakpoint>

            <Breakpoint customQuery="(min-width: 992px)">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <FontAwesomeIcon icon={faCog} />
                </OverlayTrigger>
            </Breakpoint>
        </div>
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
                {renderAddDogIcon()}
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body>
                    <UpdateUserForm close={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SettingsModal;