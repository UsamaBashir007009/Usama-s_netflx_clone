import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "../src/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGNALS"
        fetchURL={requests.fetchNetflixOrignals}
        isLarge
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />

      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentoryMovies} />
    </div>
  );
}

export default App;
