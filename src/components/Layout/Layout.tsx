import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type LayoutProps = BoxProps;

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh" {...rest}>
      {children}
    </Box>
  );
};

export default Layout;
