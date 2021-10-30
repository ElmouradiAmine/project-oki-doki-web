import React from 'react';
import { Avatar, Button } from '@chakra-ui/react';
import FeedItemContainer from './FeedItemContainer';
import FeedItemContent from '../FeedItemContent/FeedItemContent';

type FeedItemProps = {
  avatarUrl: string;
  name: string;
  nickname: string;
  description: string;
  videoUrl: string;
};

const FeedItem = ({ avatarUrl, name, nickname, description, videoUrl }: FeedItemProps) => {
  return (
    <FeedItemContainer>
      <Avatar size="md" src={avatarUrl} />
      <FeedItemContent
        name={name}
        nickname={nickname}
        description={description}
        videoUrl={videoUrl}
      />
      <Button variant="outline" colorScheme="twitter">
        Follow
      </Button>
    </FeedItemContainer>
  );
};

export default FeedItem;
