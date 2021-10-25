import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import HeaderContent from './HeaderContent';

const HeaderContainer: FC = ({ children }) => {
  return (
    <Box
      as="header"
      position="fixed"
      height="60px"
      width="100%"
      left="0px"
      top="0px"
      display="flex"
      backgroundColor="white"
      justifyContent="space-around"
      borderBottom="1px solid rgba(34, 90, 89, 0.2)"
    >
      <HeaderContent>{children}</HeaderContent>
    </Box>
  );
};

export default HeaderContainer;
