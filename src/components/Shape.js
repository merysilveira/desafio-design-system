import React from 'react';

function Shape(props) {
  return (
    <div className="shape">
      { props.children }
    </div>
  )
}

export default Shape;