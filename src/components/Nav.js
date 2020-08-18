import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {
    return(
    <nav>
        <ul>
            <Link to='/'>
            <li className='link'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='link'>About</li>
            </Link>
        </ul>
    </nav>
    )
}

export default Nav