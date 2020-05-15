import React from 'react';

import './style.css';

export default function ValidationMessage(props){
    if (!props.valid) {
        return <div className='error-msg'>{props.message}</div>
      }
      return null;
}