import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import API from '../../utils/API'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Functions from '../../utils/Functions'



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



    renderAddDogIcon = () => (
        <div>
            <Breakpoint customQuery="(max-width: 991px)">
                <div>
                    <FontAwesomeIcon icon={faClipboardList} />
                    <h6>Activity Log</h6>
                </div>
            </Breakpoint>

            <Breakpoint customQuery="(min-width: 992px)">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={this.renderTooltip}
                >
                    <FontAwesomeIcon icon={faClipboardList} />
                </OverlayTrigger>
            </Breakpoint>
        </div>
    );

    renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Activities List
            </Tooltip>
        );
    }


    componentDidMount() {
        API.getUserInfo().then(sessionRes => {
            API.getUserLogs(sessionRes.data.id)
                .then(res => {
                    console.log(res)
                    this.setState({
                        userLogs: res.data
                    })
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

    createTable = () => {
        let dateText = (dateInfo) => {
            let dt = new Date(dateInfo);
            return (`${
                (dt.getMonth() + 1).toString().padStart(2, '0')}/${
                dt.getDate().toString().padStart(2, '0')}/${
                dt.getFullYear().toString().padStart(4, '0')}`
            );
        }


        let table = []
        let actions = this.state.userLogs
        // Outer loop to create parent
        for (let i = 0; i < actions.length; i++) {
            let children = []
            children.push(<td>{Functions.capitalize(actions[i].pet.name)}</td>)
            children.push(<td>{dateText(actions[i].updatedAt)}</td>)
            children.push(<td>{Functions.capitalize(actions[i].type)}</td>)
            children.push(<td>{Functions.capitalize(actions[i].detail)}</td>)
            table.push(<tr>{children}</tr>)
            children = []
        }
        return table
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
                                {this.createTable()}

                            </tbody>
                        </Table>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        {/* <Button variant="primary">Save changes</Button> */}
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default ActivityLog;
