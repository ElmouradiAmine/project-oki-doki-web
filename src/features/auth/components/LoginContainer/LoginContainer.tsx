import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from 'store';
import { AuthTypes } from 'features/auth/types';
import Container from '../Container/Container';

const LoginContainer: FC = ({ children }) => {
  const { login, isLoading } = useAuth();
  return (
    <Container title="Log in">
      <Button onClick={() => login({ type: AuthTypes.GOOGLE_AUTH })} isLoading={isLoading}>
        Google login
      </Button>
      {children}
    </Container>
  );
};

export default LoginContainer;
