import React from 'react';
import VideoContainer from './VideoContainer';

type VideoProps = {
  url: string;
};

const Video = ({ url }: VideoProps) => {
  return (
    <VideoContainer>
      <video
        src={url}
        width="100%"
        height="100%"
        controls
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      >
        <track kind="captions" />
      </video>
    </VideoContainer>
  );
};

export default Video;
