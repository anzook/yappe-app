import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class Tbutton extends Component {
    render() {
        return (
            <div>
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton type="checkbox" defaultChecked value="1">
                        Checked
                    </ToggleButton>
                </ButtonGroup>
            </div>
        )
    }
}

export default Tbutton;
