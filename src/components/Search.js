import React, {useState} from 'react';
import '../styles/Search.css'
import getImages from '../requests/getImages'

const Search = () => {
    const [value, setValue] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        getImages(value)
    }
    return(
    <>
    <form 
        className='searchForm'
        onSubmit={handleSubmit}>
        <input
            className='searchInput'
            type='text'
            onChange={(e) => setValue(e.target.value)}>
        </input>
        <button 
            className='searchButton'
            type='submit'>
                Search!
        </button>
    </form>
    </>
    )
}

export default Search