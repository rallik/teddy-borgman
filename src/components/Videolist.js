import React from 'react'
import { Video } from './index'

const Videolist = ({ location, data }) => {
    const onworkpage = location.pathname.includes("work");
    console.log(data.allVideosJson.nodes)

    return (
        <section className={onworkpage ? 'section video-list work' : 'section video-list highlights'}>
            <ul className={onworkpage ? 'work-list' : 'highlights-list'}>
                {
                    data.allVideosJson?.nodes?.map((vid) => <Video key={vid.id} video={vid}/>)
                }
            </ul>
        </section>
    )
}

export default Videolist
