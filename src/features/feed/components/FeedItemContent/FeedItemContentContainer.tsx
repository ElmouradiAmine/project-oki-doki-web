import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const FeedItemContentContainer: FC = ({ children }) => {
  return (
    <Box margin="0 12px" flex="1" display="flex" alignItems="flex-start" flexDir="column">
      {children}
    </Box>
  );
};

export default FeedItemContentContainer;
