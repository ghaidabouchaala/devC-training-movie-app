import React from 'react'
import Rate from './Rate'
const Header =({changeInput , minRate , changeRate})=>{
    
        return (
            <div className="header_container">
            <strong >Favorite Movies! </strong>
            <i class="fas fa-search" style={{paddingLeft:"100px"}}></i>
                <input className="form-control" onChange={changeInput} placeholder="search for a movie" />
            <span style={{margin : "30px"}}>Filter By Rating</span>
            <Rate rate={minRate} changeRate={changeRate}/>
            </div>
        )

}

export default Header; 