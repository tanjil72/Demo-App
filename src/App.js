import React, { useState, useEffect } from "react";
import './App.css';
import Search from './Components/Search';
import Header from "./Components/Header";
import Movie from "./Components/Movie";


const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d215ab46";

const App=()=>{

  const [Movie,setMovie]=useState("");

  const searchMovie=(typedMovie)=>{
    fetch(`http://www.omdbapi.com/?i=${typedMovie}&apikey=d215ab46`)
    .then(response=>response.json())
    .then(jsonResponse=>{
if(jsonResponse.Response==='True'){
Movie(jsonResponse.Search)
}
    })
  }

 

  const [search,setSearch]=useState("");
  return(
    <div>
      <Header text="Search Movie" />
      <Search search={searchMovie} />
    </div>
  )
}


export default App;