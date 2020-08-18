import React from 'react'
import PropTypes from 'prop-types'
import '../styles/SearchResult.css'


const SearchResult = ({results}) => {
    const foundImages = results.map((image, index) => 
    <img key={index} className='imageOnScreen' src={image.links[0].href} alt={image.data[0].description}></img>)


    if(!results.length) {
        return <p className='welcomeMessage'>Type something in the searchbar to get pictures!</p>
    } else {
    return(
        <div className='imageContainer'>  
            {foundImages}
        </div>

        
    )}

}

SearchResult.propTypes = {
    results: PropTypes.array
}
export default SearchResult 


