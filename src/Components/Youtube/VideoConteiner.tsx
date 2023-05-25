import React from 'react';
import YouTubeVideo from './YouTubeVideo';
import "./videoConteiner.scss"

const VideoContainer = ({ youtubeLink }:any) => {
  // Extract the video ID from the YouTube link
  const getVideoId = (link:any) => {
    const url = new URL(link);
    const params = new URLSearchParams(url.search);
    return params.get('v');
  };

  const videoId = getVideoId(youtubeLink);

  return (
      <YouTubeVideo videoId={videoId} />
  );
};

export default VideoContainer;
