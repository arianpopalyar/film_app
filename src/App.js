import { Component, useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Routes, Route} from 'react-router-dom';

const API_URL = 'http://www.omdbapi.com?&apikey=8ca1194e';


function App() {
 
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search); 
  }

  useEffect(()=>{
    searchMovies('SpiderMan');
  },[])
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<AboutView/>}/>
      </Routes>
      
    
      <h1>Movie World</h1>
      <div className="search">
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
          ):(
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
        )}
    </div>
  );
}

export default App;
