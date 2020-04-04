import React, { Component } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import API from '../../utils/API'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


class ActivityLog extends Component {



    constructor(props) {
        super(props);
        this.state = {
            showmodal: false,
            userId: null,
            // hidemodal: true,
            userLogs: []

        };
    }

    renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Add Dog
            </Tooltip>
        );
    }

    renderAddDogIcon = () => (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip}
        >
            <FontAwesomeIcon icon={faClipboardList} />
        </OverlayTrigger>
    );


    componentDidMount() {
        API.getUserLogs(3)
            .then(res => {
                console.log(res)
                this.setState({
                    userLogs: res.data
                })

            })
    }

    handleShow = (event) => {
        this.setState({
            showmodal: true,

        })
    }

    handleClose = (event) => {
        this.setState({
            showmodal: false,
        })
    }

    render() {

        return (
            <>
                <div className='modal-btn' onClick={this.handleShow} >
                    {this.renderAddDogIcon()}
                </div>

                <Modal show={this.state.showmodal} onHide={this.handleClose} >
                    {/* <Modal.Header closeButton>
                    
                    </Modal.Header> */}

                    <Modal.Body>
                        <Table striped bordered hover variant="responsive">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.userLogs[0]?.pet?.name}</td>
                                    <td>{this.state.userLogs[0]?.updatedAt}</td>
                                    <td>{this.state.userLogs[0]?.type}</td>
                                    <td> {this.state.userLogs[0]?.detail} </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default ActivityLog;
