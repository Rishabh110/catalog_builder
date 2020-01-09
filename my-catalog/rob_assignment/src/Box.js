import React from 'react';

const Box = (props) => (
  <div
    style={{
      backgroundColor: props.backgroundColor,
      opacity: props.opacity,
      height: '100px',
      borderStyle: 'solid',
    }}
  >
    {props.children === '' ? (
      <h3>Type in a color</h3>
    ) : (
      <h2>{props.children}</h2>
    )}
  </div>
);

export default Box;
