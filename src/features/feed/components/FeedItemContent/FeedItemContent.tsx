import React from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Caption from '../Caption/Caption';
import Video from '../Video/Video';
import FeedItemContentContainer from './FeedItemContentContainer';

type FeedItemContentProps = {
  name: string;
  nickname: string;
  description: string;
  videoUrl: string;
};

const FeedItemContent = ({ name, nickname, description, videoUrl }: FeedItemContentProps) => {
  return (
    <FeedItemContentContainer>
      <AuthorInfo name={name} nickname={nickname} />
      <Caption description={description} />
      <Video url={videoUrl} />
    </FeedItemContentContainer>
  );
};

export default FeedItemContent;
