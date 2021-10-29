import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from 'store';
import Container from '../Container/Container';

const LoginContainer: FC = ({ children }) => {
  const { googleLogin, isLoading } = useAuth();
  return (
    <Container title="Log in">
      <Button onClick={googleLogin} isLoading={isLoading}>
        Google login
      </Button>
      {children}
    </Container>
  );
};

export default LoginContainer;
