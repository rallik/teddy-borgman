import React from "react";

const Video = ({ video }) => {

    return (
        <li className='vid-list-li'>
            <iframe
                className="video"
                src={video.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                allowFullScreen
            ></iframe>
        </li>
    );
};

export default Video;
