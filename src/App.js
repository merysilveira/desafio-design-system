import React from "react";
import { NewsContextProvider } from "./services/googleNewsApi";

import Header from "./components/Header";
import CardsContent from "./components/CardsContent";
import Footer from "./components/Footer";

import './App.scss';

function App() {

  return (
    <div>
      <Header />
      <NewsContextProvider>
        <CardsContent />
      </NewsContextProvider>
      <Footer />
    </div>
  );
}

export default App;
