import React from 'react'
import { Header, Navbar, Footer } from './index'
// import Social from '../components/Social'
// import Contact from '../components/Contact'


const layout = ({ children, loction }) => {
    return (
        <React.Fragment>
            <Header />
            <Navbar />
            {children}
            <Footer />
            {/* <Social /> */}
        </React.Fragment>
    )
}

export default layout