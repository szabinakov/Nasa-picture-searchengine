import React, {useState} from 'react';
import '../styles/App.css';

import Search from './Search'
import SearchResult from './SearchResult';

function App() {
  const [searchResult, setSearchResult] = useState([])

  return (
    <>
    <div className="App">
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

export default App;
