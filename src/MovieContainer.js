import React from 'react'
import MovieItem from './MovieItem'

const MovieContainer = ({movieList=[] , inputFilter , minRate }) =>  {
    return (
        <div className="movie-container">
           
           
            {
                movieList.filter(el => el.name.toLowerCase().includes(inputFilter.toLowerCase() ) && el.rate >= minRate).map((el,i)=><MovieItem movie={el}/>)   
            }
       

            
            
            
        
            
        </div>
    )
}

export default MovieContainer ; 