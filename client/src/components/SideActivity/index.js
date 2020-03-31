import React, {Component, useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import API from '../../utils/API'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


function ActivityLog() {


   
  constructor(props) {
      super(props);
      this.state = {
          userId: null,
          userLogs: []
          
      };
  }



  componentDidMount() {
      API.getUserLogs(3)
      .then(res=> {
          console.log(res)
          this.setState({
              userLogs:res.data
            })

      })
  }

  


    render() {

        

        return (
            <>
              <div className='modal-btn' >
                  <FontAwesomeIcon icon={faClipboardList}/>
                  <span className='span'>Activity Log</span>
              </div>
              
                <Modal.Dialog  >
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
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>

                


            </>

        )
    }
}
