import React from "react";

const Video = ({ video }) => {

    return (
        <React.Fragment>
            <iframe
                src={video.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </React.Fragment>
    );
};

export default Video;
