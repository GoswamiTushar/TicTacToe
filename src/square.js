import React from 'react';

function SquareComponent(props) {
  return (
    <span className="square fc-center jc-center" onClick={props.onClick}>
      {props.content}
    </span>
  );
}

export default SquareComponent;
