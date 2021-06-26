import React from 'react'
import { Header, Navbar, Footer, Contact } from './index'
// import Social from '../components/Social'
// import Contact from '../components/Contact'


const layout = ({ children, location }) => {
    return (
        <React.Fragment>
            <Header />
            <Navbar />
            {children}
            {location.pathname.includes("contact") ? "" : <Contact />}
            <Footer />
            {/* <Social /> */}
        </React.Fragment>
    )
}

export default layout