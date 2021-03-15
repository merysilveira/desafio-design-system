import React from 'react';

import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Shape from './Shape';

function CardContent() {
  return (
    <div className="cardContent">
      <Shape>
        <Heading></Heading>
        <Paragraph></Paragraph>
        <Button></Button>
      </Shape>
    </div>
  )
}

export default CardContent;