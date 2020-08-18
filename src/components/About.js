import React from 'react'
import '../styles/About.css'

const About = () => {
    return(
        <div className='aboutContainer'>
            <p className='aboutP'>
            As part of my course at Manchester Codes I have been asked to build a React web application that allows users to search for images based on a query relating to space.<br/> I have used <a className='aboutLink' href='https://api.nasa.gov/'>NASA Images and Video Library</a> for the search functionality.
            </p>
        </div>
    )
}

export default About
