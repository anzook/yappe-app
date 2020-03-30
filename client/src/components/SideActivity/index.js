import React, {Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import API from '../../utils/API'
import './style.css';


function ActivityLog() {

  constructor() {
      super();
      this.state = {
          type: props.type,
          detail:props.detail,
          petId:props.pet

      };
  }

  componentDidMount(), {
      API.getUserLogs()
      .then(res=> {
          this.setState({id: res.data.id})
      })

  }
  
    render() {

    



        return (
            <>

                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>Activity Log</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Table striped bordered hover variant="responsive">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>


            </>

        )
    }
}
export default ActivityLog;