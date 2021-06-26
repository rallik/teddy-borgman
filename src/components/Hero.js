import React from 'react'
import { Link } from "gatsby"


const Hero = () => {
    return (
        <section className='section hero'>
            <div className='hero-text'>
                <h2>Creator</h2>
                <h2>Storyteller</h2>
                <h2>Filmmaker</h2>
            </div>
            <button className='btn large-btn outline'>
                    <Link to='/contact'>Get in Touch</Link>
            </button>
        </section>
    )
}

export default Hero
