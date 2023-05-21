import React from "react";
import "./WatchList.css";
import { UseMovies } from "../context/GlobalContext";
import MovieCard from "./MovieCard";
const WatchList = () => {
  const { watchList } = UseMovies();
  return (
    <>
      <h1>My WatchList</h1>
      <div className="watch-list">
        <div className="container">
          <div className="main-heading"></div>
          <span>{watchList.length}</span>
        </div>
        {watchList.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} type="WatchList" />
        ))}
      </div>
    </>
  );
};

export default WatchList;
