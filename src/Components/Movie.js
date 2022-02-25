import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE ="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6"

const Movie = ({ movie }) => {
    const poster =
      movie.poster_path === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.poster_path;
    return (
      <div className="movie">
        <h2>{movie.title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${movie.poster_path}`}
            src={poster}
          />
        </div>
        <p>Release Date:{movie.release_date}</p>
        
        
      </div>
    );
  };
  
  
  export default Movie;