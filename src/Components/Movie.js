import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6";

const Movie = ({ movie }) => {
  let Releasedate = movie.release_date;
  const ReleaseArray = Releasedate.split("-");
  const poster =
    movie.poster_path === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.poster_path;
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <div>
        <img
          width="200"
          height="300"
          alt={`The movie titled: ${movie.title}`}
          src={poster}
        />
      </div>

      <p>Year: {ReleaseArray[0]} <span><p>Rating: {movie.vote_average}⭐</p></span></p>
    </div>
  );
};

export default Movie;
