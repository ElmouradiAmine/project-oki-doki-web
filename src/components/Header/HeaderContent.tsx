import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const HeaderContent: FC = ({ children }) => {
  return (
    <Box
      width="100%"
      height="100%"
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      flexDir="row"
      padding="0"
      maxW="1100px"
      paddingLeft="20px"
      paddingRight="24px"
    >
      {children}
    </Box>
  );
};

export default HeaderContent;
