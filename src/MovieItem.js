import React from 'react'
import Rate from './Rate'
import Date from './Date'

const MovieItem =({movie}) => {
    return (
        <div className="movie-item">
            <img src={movie.poster} alt="film"/>
            <p>{movie.name}</p>
            
            <div className="rating">
                    <Rate rate={movie.rate}/>
                    <Date date={movie.date}/>
            </div>
            
        </div>
    )
}
export default MovieItem
