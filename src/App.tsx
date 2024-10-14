import React from 'react';
import './App.css';
import SearchComponent from './components/Search/SearchBar';
import Trending from './components/Trending/Trending';
import SearchResults from './components/Search/SearchResults';
import Navbar from './components/NavBar/Navbar';
import FavouriteMovies from './components/FavouriteMovies/FavouriteMovies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecentlyReleased from './components/RecentlyReleased/RecentlyReleased';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <SearchComponent />
        <Routes>
          <Route path="/" element={
            <>
              <RecentlyReleased />
              <Trending />
            </>
          } />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favourite" element={<FavouriteMovies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
