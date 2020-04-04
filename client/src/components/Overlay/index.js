import React from 'react';
import AddDogModal from '../AddDogModal'
import { OverlayTrigger, Tooltip, Button} from 'react-bootstrap'


function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
      </Tooltip>
    );
  }
  
  const Overlay = () => (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <AddDogModal />
    </OverlayTrigger>
  );
  
export default Overlay;