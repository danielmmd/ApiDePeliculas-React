import React from 'react';
import style from "./MovieCard.module.css"

export const MoviesCard = ({movie}) => {

    console.log(style);
    const img = "https://image.tmdb.org/t/p/w300" + movie.poster_path;


    return(
        
        <li className={style.movieCard}>
        <img width={230} height={345} className={style.movieImage} src={img} alt={movie.title}></img>
        <div>{movie.title}</div>
        </li>
    )
}