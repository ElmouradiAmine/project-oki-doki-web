import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const Layout: FC = ({ children }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      {children}
    </Box>
  );
};

export default Layout;
