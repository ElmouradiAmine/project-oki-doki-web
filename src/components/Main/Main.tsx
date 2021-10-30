import React, { FC } from 'react';

import { Box } from '@chakra-ui/react';

const Main: FC = ({ children }) => {
  return (
    <Box
      display="flex"
      flex="1 1 auto"
      paddingTop="60px"
      maxWidth="1100px"
      justifyContent="center"
      height="100%"
    >
      {children}
    </Box>
  );
};

export default Main;
