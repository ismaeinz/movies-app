import React from "react";
import { UseMovies } from "../context/GlobalContext";

const ResultsCard = ({ movie }) => {
  const { dispatch, watchList } = UseMovies();
  const storedMovie = watchList.find((o) => o.imdbID === movie.imdbID);
  const storedMovieWatched = watchList.find((o) => o.imdbID === movie.imdbID);
  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt="found" />
        ) : (
          <div
            className="filter-poster"
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "red",
            }}
          >
            img not found
          </div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          <h5
            className="title"
            style={{
              fontSize: "16px",
            }}
          >
            {movie.Type}
          </h5>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "_"}
        </div>
        <div className="controls">
          <button
            onClick={() =>
              dispatch({
                type: "AddToWatchList",
                payload: movie,
              })
            }
            className="btn"
            disabled={watchListDisabled}
          >
            Add To WatchList
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() =>
              dispatch({
                type: "AddToWatched",
                payload: movie,
              })
            }
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
