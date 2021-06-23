import React from 'react'
import { Navlist } from './index';


const Footer = () => {
    return (
        <footer>
            <Navlist name={'footer-sitemap-mobile'} elname={'footer-sitemap-mobile-li'}/>
            <h3 className='copyright'>©2021 Reuben Allik</h3>
        </footer>
    )
}

export default Footer
