import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {
    return(
    <nav>
        <ul>
            <Link to='/'>
            <li className='Link'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='Link'>About</li>
            </Link>
        </ul>
    </nav>
    )
}

export default Nav