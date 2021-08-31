import React from "react";
import { MyMoviesCard } from "./MyMoviesCard";
const MyMoviesContainer = (props) => {
    return (
        <div id='my-collection'>
            {props.myMovies.map(movie => <MyMoviesCard

                movie={movie}
                title={movie.title}
                poster={movie.poster}
                year={movie.releaseDate}
                type={movie.Type}

                removeMovie={props.removeMovie}

            />)}



        </div>
    );
};
export default MyMoviesContainer;
