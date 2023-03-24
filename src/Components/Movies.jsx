import React from 'react';
import movies from "./movies.json"
import { MoviesCard } from './MoviesCard';
import styleGrid from "./MoviesGrid.module.css"

export const Movies = () =>{


console.log(movies);
return(

    <ul className={styleGrid.movieGrid}>
        {movies.map((movie) => (
        
        <MoviesCard key={movie.id} movie = {movie}/>

        ))}   
    </ul>
);
}
