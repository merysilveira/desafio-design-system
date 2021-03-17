import React from 'react';

import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Shape from './Shape';

function CardContent({ data }) {
  return (
    <div className="cardContent">
      <Shape>
        <Heading>{data.title}</Heading>
        <figure className="image_wrap">
          <img className="image" src={data.urlToImage} alt={data.title}/>
        </figure>
        <Paragraph>{data.content}</Paragraph>
        <Button>{data.url}</Button>
      </Shape>
    </div>
  )
}

export default CardContent;