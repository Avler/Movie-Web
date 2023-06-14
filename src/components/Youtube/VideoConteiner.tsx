import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import "./style.scss";

interface VideoContainerProps {
  youtubeLink: string;
}
const VideoContainer: React.FC<VideoContainerProps> = ({ youtubeLink }) => {
  // Extract the video ID from the YouTube link
  const getVideoId = (link: string): string | null => {
    const url = new URL(link);
    const params = new URLSearchParams(url.search);
    return params.get("v");
  };

  const videoId = getVideoId(youtubeLink) || "";

  return <YouTubeVideo videoId={videoId} />;
};

export default VideoContainer;
