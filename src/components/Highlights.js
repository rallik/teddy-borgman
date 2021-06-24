import React from 'react'
import { Videolist } from './index'

const Highlights = ({ location, data }) => {
    return (
        <React.Fragment>
            <Videolist location={location} data={data} />
        </React.Fragment>
    )
}

export default Highlights
