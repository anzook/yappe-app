import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import '../careCard/style.css';

export class CareCard extends Component {
    render() {
        return (
            <div className="care">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Name: </ListGroupItem>
                            <ListGroupItem>Role:  </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default CareCard;









