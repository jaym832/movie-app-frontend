import React from "react";
import MovieCard from "./MovieCard";

const MovieContainer = (props) => {
  return (
    <div id='my-collection'>
      {props.moviedata.map(movie => <MovieCard

        movie={movie}
        title={movie.Title}
        poster={movie.Poster}
        year={movie.Year}
        type={movie.Type}

        sendData={props.sendData}


      />)}



    </div>
  );
};
export default MovieContainer;
