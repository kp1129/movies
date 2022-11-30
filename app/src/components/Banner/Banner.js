import React, { useState, useEffect } from "react";
import { client } from "../../axios";
import { requests } from "../../Requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  const truncate = (description, n) => {
    return description?.length > n
      ? description.substr(0, n - 1) + "..."
      : description;
  };

  useEffect(() => {
    // fetch banner movie
    client
      .get(requests.fetchNetflixOriginals)
      .then((res) => res.data.results)
      .then((res) => setMovie(res[Math.floor(Math.random() * res.length)]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
