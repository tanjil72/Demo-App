import React, { useState, useEffect } from "react";
import './App.css';
import Search from './Components/Search';
import Header from "./Components/Header";
import Movie from "./Components/Movie";


const MOVIE_API_URL = "https://api.themoviedb.org/3/movie/550?api_key=e07e021506d25ba87814281a91ba6bcd"; 


const App = () => {

  const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch("https://movie_list.p.rapidapi.com/list", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie_list.p.rapidapi.com",
		"x-rapidapi-key": "7fef88001amsh755e61667596f86p126416jsn71a4d8d8a287"
	}
})
.then(response=>response.json())
.then(Jsonresponse=>{
  
setMovies(Jsonresponse)
  
})
.catch(err => {
	console.error(err);
});

  }, []);

    const search = searchValue => {
      fetch("https://movie_list.p.rapidapi.com/list", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie_list.p.rapidapi.com",
		"x-rapidapi-key": "7fef88001amsh755e61667596f86p126416jsn71a4d8d8a287"
	}
})
.then(response=>response.json())
.then(Jsonresponse=>{
  
setMovies(Jsonresponse)
  
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
            <Movie key={`${index}`} movie={movie} />
          ))
        }
      </div>
    </div>
  );
};


export default App;