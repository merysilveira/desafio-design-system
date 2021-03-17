import React from 'react';

function Heading(props) {
  return (
    <div className="heading">
      <h2 className="heading_small">{props.children}</h2>
      {/* <h3 className="heading_subtitle"></h3> */}
    </div>
  )
}

export default Heading;