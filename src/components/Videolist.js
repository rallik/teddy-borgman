import React from 'react'
import { Link } from "gatsby"
import { Video } from './index'

const Videolist = ({ location, data }) => {
    const onworkpage = location.pathname.includes("work");
    console.log(data.allVideosJson.nodes)

    return (
        <section className={onworkpage ? 'section video-list work' : 'section video-list highlights'}>
            {onworkpage ? (
                <h2 className='head work-head'>My Work</h2>
            ) : '' }
            <ul className={onworkpage ? 'work-list' : 'highlights-list'}>
                {
                    data.allVideosJson?.nodes?.map((vid) => <Video key={vid.id} video={vid}/>)
                }
            </ul>
            {onworkpage ? '' : (
                <button className='btn large-btn dark'>
                    <Link to='/work'>All Work</Link>
                </button>
            )}
        </section>
    )
}

export default Videolist
