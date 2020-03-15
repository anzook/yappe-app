import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

export class Car extends Component {
    render() {

        return (
            <div id="card">
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Dog 1</Card.Title>
      <Card.Text>
        this is something about the dog maybe not we could loose this area
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">where the toggle button is going to be</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Dog two</Card.Title>
      <Card.Text>
        Jibbles is a family dog
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">what does jibbles need</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Dog 3</Card.Title>
      <Card.Text>
        Rody 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">what does Rody need</small>
    </Card.Footer>
  </Card>
</CardGroup>
         </div>
        )
        
    }
}

export default Car;

















