import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const VideoContainer: FC = ({ children }) => {
  return (
    <Box
      w="calc(0.57 * (450px + ((100vw - 768px) / 1152) * 100))"
      h="calc(450px + ((100vw - 768px) / 1152) * 100)"
      position="relative"
      cursor="pointer"
      borderRadius="5px"
      bgColor="rgba(0, 0, 0, 0.9)"
      alignSelf="center"
    >
      {children}
    </Box>
  );
};

export default VideoContainer;
