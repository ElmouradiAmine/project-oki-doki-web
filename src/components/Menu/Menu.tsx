import React from 'react';
import { HStack, Avatar } from '@chakra-ui/react';
import { useAuth } from 'store';

const Menu = () => {
  const { currentUser } = useAuth();
  return (
    <HStack>
      <Avatar size="md" src={currentUser?.photoURL ?? ''} />
    </HStack>
  );
};

export default Menu;
