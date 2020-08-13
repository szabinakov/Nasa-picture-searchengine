import React, {useState} from 'react';
import '../styles/Search.css'
import getImages from '../requests/getImages'

const Search = ({setSearchResult}) => {
    const [value, setValue] = useState()

    const handleSubmit = async(event) => {
        event.preventDefault()
        await getImages(value)
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