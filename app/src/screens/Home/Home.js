import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";

import Nav from "../../components/Nav/Nav";
import Row from "../../components/Row/Row";
import { requests } from "../../Requests";

function Home() {
  return (
    <div className="home">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
