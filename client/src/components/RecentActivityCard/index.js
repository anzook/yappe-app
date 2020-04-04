import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroup'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import API from '../../utils/API'
// import DogCard from "../../components/Card";
// import './style.css';

class RecentActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            activities: {}
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        API.getUserLogs({
            type: this.state.activities,
            detail: this.state.details,
            user: this.props.user,
            pet: this.props.pet
        })
            .then(res => {
                // console.log(res);
                this.props.change();
            })
    }
    render() {
        return (
            <div>
                <Container>
                    <h4>Owned Dogs Recent Activity</h4>
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
