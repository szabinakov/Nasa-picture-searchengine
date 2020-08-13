import React, {useState} from 'react';
import '../styles/Search.css'


const Search = () => {
    const [value, setValue] = useState()

    return(
    <>
    <form className='searchForm'>
        <input
            className='searchInput'
            type='text'>
        </input>
        <button 
            className='searchButton'
            type='submit'
            onChange={(e) => setValue(e.target.value)}>
                Search!
        </button>
    </form>
    </>
    )
}

export default Search