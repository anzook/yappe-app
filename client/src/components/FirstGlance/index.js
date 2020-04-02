import React, { Component } from 'react';
import LineChart from '../../components/LinesChart';
import DoughnutChart from "../../components/DoughnutChart";
import {Container, Row, Col} from 'react-bootstrap';

import './style.css';

export default class FirstGlance extends Component{
    render() {
        return (<Container>
            <Row>
              <Col>
                <ul className='fg-ul'>
                    <li><DoughnutChart /></li>
                    <li><DoughnutChart /></li>
                    <li><DoughnutChart /></li>
                    <li><DoughnutChart /></li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col><LineChart /></Col>
            </Row>
          </Container>) 
        
    }
}