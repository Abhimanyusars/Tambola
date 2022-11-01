
import React from 'react';

const LastValue = props => (
  <p className="NextSelectedValue" onClick={props.onClick}>
    {props.value ? props.value : 'Click for '}
  </p>
);

export default LastValue;