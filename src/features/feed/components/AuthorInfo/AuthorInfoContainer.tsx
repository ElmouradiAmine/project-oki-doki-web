import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const AuthorInfoContainer: FC = ({ children }) => {
  return (
    <Box
      display="flex"
      textOverflow="ellipsis"
      alignItems="flex-start"
      marginBottom="4px"
      flexDir="column"
    >
      {children}
    </Box>
  );
};

export default AuthorInfoContainer;
