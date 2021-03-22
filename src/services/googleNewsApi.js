import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const NEWS_API_KEY = 'ac1c161582034999998404d71f8eeb75';

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=br&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

