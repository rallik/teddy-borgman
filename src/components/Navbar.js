import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavIcon from '../assets/icons/nav.svg'



const Nav = () => {
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }



    return (
        <React.Fragment>
            <i className={clicked ? 'nav-icon active' : 'nav-icon'} onClick={handleClick}>
                <NavIcon />
            </i>
            <nav className={clicked ? 'navbar active' : 'navbar'}>

            </nav>
        </React.Fragment>
        
    )
}

export default Nav
