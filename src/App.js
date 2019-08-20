import React from 'react';
import Header from './Header'
import './App.css';
import MovieContainer from './MovieContainer';
import AddMovie from './AddMovie'

const Movies = [
  
  { id : 1 , name: 'The God father ' , rate : 5 , poster :"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" , date : "1972" },
  { id : 2 , name: 'August Rush ' , rate : 4 , poster :"http://www.impawards.com/2007/posters/august_rush.jpg"  , date : "2007"},
  { id : 3 , name: 'capernaum ' , rate : 5 , poster :"http://www.impawards.com/intl/lebanon/2018/posters/capharnaum.jpg", date : "2019"},
  { id : 4 , name: 'Aladdin ' , rate : 3 , poster :"http://www.impawards.com/2019/posters/aladdin_ver4.jpg" , date : "2019" },
  { id : 5 , name: 'The Lion King ' , rate : 4 , poster :"https://www.barakashop.co.za/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/l/i/lion_king_poster.jpg" ,date : "2019" },
  { id : 6 , name: 'Dachra ' , rate : 4 , poster :"https://m.media-amazon.com/images/M/MV5BNDUwOTk5ZWYtMDk0OS00ZmVjLTk3N2QtMTQ0MmU2Yjc3ZTI2XkEyXkFqcGdeQXVyODgxMTA3Njg@._V1_.jpg"  , date : "2018"},
  { id : 7 , name: 'Avengers ' , rate : 5 , poster :" https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._SL1183_.jpg"  , date : "2019"},
  { id : 7 , name: 'The secret Life of pets ' , rate : 3 , poster :"   http://www.impawards.com/2016/posters/secret_life_of_pets_ver2.jpg"  , date : "2016"},

] 



class App extends React.Component {

    state={
      Movies : Movies ,// ES6
      inputFilter  : '', 
      minRate : 1 
    }
    
    changeInputFilter = e => {
      this.setState({
        inputFilter : e.target.value 
      })       

    }

    changeRateFilter = r => {
      this.setState({
        minRate : r
      })
    }
    addMovie = movie => {
      this.setState({
        Movies : this.state.Movies.concat(movie)
      })
    }
   
  render(){
    const {Movies, inputFilter , minRate} = this.state; 
    return (

    <div className="App">
       <AddMovie addMovie={this.addMovie} className="btn" />
      <Header changeInput={this.changeInputFilter} minRate={minRate} changeRate={this.changeRateFilter}/>
      <MovieContainer   key={Movies.id} movieList={Movies} inputFilter={inputFilter} minRate={minRate}  addMovie={this.addMovie}/>
  
      </div>
    );
  }
  
}

export default App;
