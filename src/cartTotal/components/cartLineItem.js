import React from 'react';
//import PropTypes from 'prop-types';
import Tooltip from 'react-simple-tooltip';

function getDesctription(props) {
  let textDecoration = props.textDecoration ? 'underline' : 'none';
  if (props.showToolTip) {
    return (
      <Tooltip content={props.toolTip} className="toolTip">
        <span className="leftAlign" style={{ textDecoration: textDecoration }}>
          {props.description}
        </span>
      </Tooltip>
    );
  } else {
    return (
      <span className="leftAlign" style={{ textDecoration: textDecoration }}>
        {props.description}
      </span>
    );
  }
}

function LineItem(props) {
  return (
    <p>
      {getDesctription(props)}
      <span className="rightAlign">
        ${props.amount}
      </span>
    </p>
  );
}

export default LineItem;
