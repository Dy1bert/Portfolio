'use client'

import React from 'react';
import YouTube from "react-youtube";
import {useScreenSize} from "@/hooks/useScreenSize";

interface VideoPlayerProps {
    VideoID: string | undefined;
}

const VideoPlayer = ({VideoID}: VideoPlayerProps) => {

    const sizes = {
        small: { height: '180', width: '320' },
        medium: { height: '360', width: '640' },
        large: { height: '540', width: '960' },
    };

    const FinalSize = sizes[useScreenSize()] ?? "medium";

    const YTOptions = {height: FinalSize.height, width: FinalSize.width, playerVars: {autoplay: false, controls: true} };

    return (
            <YouTube videoId={VideoID} opts={YTOptions} />
    );
};

export default VideoPlayer;