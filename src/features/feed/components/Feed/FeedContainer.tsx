import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

const FeedContainer: FC = ({ children }) => {
  return (
    <Box padding="24px 0" width="692px" maxW="692px">
      {children}
    </Box>
  );
};

export default FeedContainer;
