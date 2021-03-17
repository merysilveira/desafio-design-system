import React from 'react';

function Button(props) {
  return <a className="button" href={props.children} target="_blank" rel="noreferrer">Leia mais</a>
}

export default Button;