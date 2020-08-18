import React, {useState} from 'react';
import '../styles/Home.css';

import Search from './Search'
import SearchResult from './SearchResult';

function Home() {
  const [searchResult, setSearchResult] = useState([])

  return (
    <>
    <div className="Home">
      <img 
      className='nasaLogo'
      src=' https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' 
      alt='nasalogo'/>
      <Search setSearchResult={setSearchResult}/>
    </div>
     <SearchResult results={searchResult}/>
    </>
  );
}

export default Home;
