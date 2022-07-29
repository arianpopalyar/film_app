import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Routes, Route} from 'react-router-dom';
import SearchView from './components/SearchView';
import MoviewView from './components/MovieView';
import PageNotFound from './components/PageNotFound';

function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
 

  const filmApiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=`;
  
  const searchfilms = async (title) =>{
    const response = await fetch(`${filmApiUrl}${title}&page=1&include_adult=false`);
    const data = await response.json();
    setSearchResults(data.results);
  } 

  useEffect (()=> {
    if(searchText){
      searchfilms(searchText)
    }
  },[searchText]);

  return (
    <div className="app">
      <Navbar searchText={searchText} setSearchText={setSearchText} searchfilms={searchfilms}/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<AboutView/>}/>
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
        <Route path="/tv/:id" element={<MoviewView/>}></Route>
        <Route path="/movie/:id" element={<MoviewView/>}></Route>

        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
