import React, {useState} from 'react';
import '../styles/Search.css'
import PropTypes from 'prop-types'
import getImages from '../requests/getImages'

const Search = ({setSearchResult}) => {
    const [value, setValue] = useState()

    const handleSubmit = async(event) => {
        event.preventDefault()
        setSearchResult(await getImages(value))
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

Search.propTypes = {
    setSearchResult: PropTypes.func
}
export default Search