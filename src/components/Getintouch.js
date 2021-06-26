import React from 'react'
import { Link } from "gatsby"


const Getintouch = ({ btnclass }) => {
    return (
        <button className={'btn large-btn outline ' + btnclass}>
            <Link to='/contact'>Get in Touch</Link>
        </button>
    )
}

export default Getintouch
