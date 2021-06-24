import React from 'react'
import { Videolist } from './index'

const Highlights = ({ location, data }) => {
    return (
        <section className='section highlights'>
            <Videolist location={location} data={data} />
        </section>
    )
}

export default Highlights
