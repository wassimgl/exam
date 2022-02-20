import React from 'react';
import { useState } from 'react';

const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
        <h1>{movie.title}</h1>  
          {movie.description}
        </div>
  )
}

export default MovieCard