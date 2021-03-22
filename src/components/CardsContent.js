import React, { useContext } from 'react';

import { NewsContext } from "../services/googleNewsApi";
import CardContent from './CardContent';

function CardsContent(props) {
  const { data } = useContext(NewsContext);

  return (
    <div className="cardsContent">
      {data
        ? data.articles.map((news) => (
          <CardContent  data={news} key={news.url} />
        ))
        : "Carregando"
      }
    </div>
  );
}

export default CardsContent;