import React,{ useState } from "react";
import MovieCard from './MovieCard'
const MovieList=({movie})=>{
    return(
        <div>
            {movie.map(mv=> <MovieCard mv={movie}/>)}
        </div>
    )
}
export default MovieList