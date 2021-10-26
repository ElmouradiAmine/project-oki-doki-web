import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const AuthButtons = () => {
  const history = useHistory();
  return (
    <HStack>
      <Button
        colorScheme="twitter"
        variant="outline"
        paddingLeft="32px"
        paddingRight="32px"
        onClick={() => history.push('/login')}
      >
        Log in
      </Button>
      <Button
        colorScheme="twitter"
        paddingLeft="32px"
        paddingRight="32px"
        onClick={() => history.push('/signup')}
      >
        Sign up
      </Button>
    </HStack>
  );
};

export default AuthButtons;
