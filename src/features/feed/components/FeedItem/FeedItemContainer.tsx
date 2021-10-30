import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const FeedItemContainer: FC = ({ children }) => {
  return (
    <Box
      position="relative"
      padding="20px 0px"
      borderBottom="0.5px solid rgba(22, 24, 35, 0.12)"
      display="flex"
      flexDir="row"
    >
      {children}
    </Box>
  );
};

export default FeedItemContainer;
