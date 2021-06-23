import React, { useState } from 'react'
import { Link } from 'gatsby'


const Nav = () => {
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }



    return (
        <React.Fragment>
            <i className='nav-icon' onClick={handleClick}>
                {clicked ? 'x' : '='}
            </i>
            <nav className={clicked ? 'navbar active' : 'navbar'}>

            </nav>
        </React.Fragment>
        
    )
}

export default Nav
