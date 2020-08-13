import React from 'react'


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

export default SearchResult 