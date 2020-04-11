import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import CareTakersTable from '../CareTakersTable';


function CaretakersModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderAddDogIcon = () => (
        <div>
        <Breakpoint customQuery="(max-width: 991px)">
                <div>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <h6>Caretakers</h6>
                </div>
        </Breakpoint>

        <Breakpoint customQuery="(min-width: 992px)">
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <FontAwesomeIcon icon={faUserFriends} />
            </OverlayTrigger>
        </Breakpoint>
    </div>
    );

   const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Caretakers Quick-list
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
                < CareTakersTable />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CaretakersModal;