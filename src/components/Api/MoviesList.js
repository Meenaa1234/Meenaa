import React from "react";

import Movie from './Movie';

const MoviesList = (props) => {

    return (
        <ul>
            {props.movies.map(movie =>(
                <Movie
                key = {movie.id}
                title= {movie.title}
                openingText = {movie.openingText}
                releaseDate = {movie.releaseDate}
                />
            ) )}
        </ul>

    );

}
export default MoviesList;