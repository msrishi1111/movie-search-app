import React from 'react';
import './App.css';
import SearchComponent from './components/SearchBar';
import Trending from './components/Trending';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className='App'>
      <SearchComponent />
      <SearchResults />
      <Trending />
    </div>
  )
}

export default App;
