import React from 'react'
import { Link } from 'gatsby'


const Navlist = ({ name, elname }) => {
    console.log(elname)
    return (
        <ul className={name}>
            <li className={elname}>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/about'>About</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/work'>Work</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navlist
