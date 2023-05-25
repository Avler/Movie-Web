import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }:any) => {
  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
