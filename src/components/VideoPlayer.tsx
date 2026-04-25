'use client'

import React from 'react';
import YouTube from "react-youtube";

interface VideoPlayerProps {
    VideoID: string;
}

const VideoPlayer = ({VideoID}: VideoPlayerProps) => {

    {" TODO - Find a way to make the size more dynamic? add size to props (little hardcoded) and turnary operator it? Or find a better way "};
    const YTOptions = {height: "360", width: "640", playerVars: {autoplay: false, controls: true} };

    return (
            <YouTube videoId={VideoID} opts={YTOptions} />
    );
};

export default VideoPlayer;