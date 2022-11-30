import React, { useEffect, useState } from "react";
import { client } from "../../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // fetch row movies
    client
      .get(fetchUrl)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          if (
            (isLarge && movie.poster_path) ||
            (!isLarge && movie.backdrop_path)
          ) {
            const movieUrl = isLarge ? movie.poster_path : movie.backdrop_path;
            return (
              <img
                key={movie.id}
                className={`row__poster ${isLarge && "row__posterLarge"}`}
                src={`${baseURL}${movieUrl}`}
                alt={movie.name}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
}

export default Row;
