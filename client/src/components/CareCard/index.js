import React, { Component } from './node_modules/react';
import Card from './node_modules/react-bootstrap/Card'
import ListGroup from './node_modules/react-bootstrap/ListGroup'
import ListGroupItem from './node_modules/react-bootstrap/ListGroup'
import './style.css';

export class CareCard extends Component {
    render() {
        return (
            <div className="care">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Name: {this.props.name}</ListGroupItem>
                            <ListGroupItem>Role: {this.props.role}  </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default CareCard;









