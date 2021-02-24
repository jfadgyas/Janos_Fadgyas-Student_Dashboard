import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__links'><Link to='/'>Home</Link></li>
                <li className='nav__links'><Link to='/students'>Students</Link></li>
                <li className='nav__links'><Link to='/exercises'>Exercises</Link></li>
                <li className='nav__links'><Link to='/table'>Table view</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;