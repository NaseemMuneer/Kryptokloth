import React from "react";


const Video = () => {
  const videoUrl = `https://www.youtube.com/embed/syD68vdpcbM`;

  return (
      <iframe
      className="video-frame"
        src={videoUrl}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
  );
};

export default Video;
