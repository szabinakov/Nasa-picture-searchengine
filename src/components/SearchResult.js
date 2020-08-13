import React from 'react'
import PropTypes from 'prop-types'
import '../styles/SearchResult.css'


const SearchResult = ({results}) => {
    const foundImages = results.map((image) => 
    <img className='imageOnScreen' src={image} alt='imageOfResult'></img>)

    if(!results.length) {
        return <p>No Results!</p>
    } else {
    return(
        <div className='imageContainer'>
        <>{foundImages}</>
        </div>
    )}

}

SearchResult.propTypes = {
    results: PropTypes.array
}
export default SearchResult 