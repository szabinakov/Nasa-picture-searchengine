import React from 'react'
import PropTypes from 'prop-types'
import '../styles/SearchResult.css'


const SearchResult = ({results}) => {
    const images = results.map((image) => image.links[0].href)

    const foundImages = images.map((image, index) => 
    <img key={index} className='imageOnScreen' src={image} alt='imageOfResult'></img>
    )

    if(!results.length) {
        return <p>No Results!</p>
    } else {
    return(
            <ul className='imageContainer'>
                <li>{foundImages}</li>
            </ul>
        
    )}

}

SearchResult.propTypes = {
    results: PropTypes.array
}
export default SearchResult 