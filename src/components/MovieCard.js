import React from "react";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img
          src={movie.Poster}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div>Not</div>
      )}
    </div>
  );
};

export default MovieCard;
