import React, { useState, useEffect } from "react";
import './App.css';
import Search from './Components/Search';
import Header from "./Components/Header";
import Movie from "./Components/Movie";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=d215ab46"; 


const App = () => {

  const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
       
      });
  }, []);

    const search = searchValue => {
    

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=d215ab46`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          
    
        } else {
        
   
        }
      });
  	};

    
    return (
     <div className="App">
      <Header text="Search Movies" />
      <Search search={search} />

      <div className="movies">
        {
          movies.map((movie, index) => (
            <Movie movie={movie} />
          ))
        }
      </div>
    </div>
  );
};


export default App;