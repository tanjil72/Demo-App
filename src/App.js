import React, { useState, useEffect } from "react";
import './App.css';
import Search from './Components/Search';
import Header from "./Components/Header";
import Movie from "./Components/Movie";


const MOVIE_API_URL = "https://advanced-movie-search.p.rapidapi.com/search/movie?query=thor&page=1"; 


const App = () => {

  const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(MOVIE_API_URL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
		"x-rapidapi-key": "7fef88001amsh755e61667596f86p126416jsn71a4d8d8a287"
	}
})
.then(response=>response.json())
.then(Jsonresponse=>{
  
setMovies(Jsonresponse.results)
  
})
.catch(err => {
	console.error(err);
});

  }, []);

    const search = searchValue => {
      fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${searchValue}&page=1`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
		"x-rapidapi-key": "7fef88001amsh755e61667596f86p126416jsn71a4d8d8a287"
	}
})
.then(response=>response.json())
.then(Jsonresponse=>{
  
setMovies(Jsonresponse.results)
  
})
.catch(err => {
	console.error(err);
});
    }

    
    return (
     <div className="App">
      <Header text="Search Movies" />
      <Search search={search} />
      <div className="movies">
        {
          movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  );
};


export default App;