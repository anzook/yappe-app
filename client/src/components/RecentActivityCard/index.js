import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
// import './style.css';

class RecentActivity extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <Card />
                        <Card />
                        <Card />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default RecentActivity;
