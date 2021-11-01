import React from 'react';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import AuthModal from 'components/AuthModal/AuthModal';

const AuthButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack>
      <Button
        colorScheme="twitter"
        variant="outline"
        paddingLeft="32px"
        paddingRight="32px"
        onClick={onOpen}
      >
        Log in
      </Button>
      <AuthModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default AuthButtons;
