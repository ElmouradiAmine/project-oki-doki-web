import React, { FC } from 'react';
import { Button, Text, useToast } from '@chakra-ui/react';
import { useAuth } from 'store';
import { AuthTypes } from 'features/auth/types';
import { ReactComponent as GoogleIcon } from 'assets/icons/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-icon.svg';
import OrDivider from 'components/OrDivider/OrDivider';
import Container from '../Container/Container';

const LoginContainer: FC = ({ children }) => {
  const { login, isLoading } = useAuth();
  const toast = useToast();
  return (
    <Container title="Log in">
      <Button
        variant="outline"
        onClick={() => login({ type: AuthTypes.GOOGLE_AUTH })}
        isLoading={isLoading}
        fontSize="14px"
        fontWeight="500"
      >
        <GoogleIcon />
        <Text marginLeft="12px" width="156px" textAlign="start">
          Continue with Google
        </Text>
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          if (!toast.isActive('fb-login-not-implemented')) {
            toast({
              id: 'fb-login-not-implemented',
              title: 'Facebook login is not implemented yet.',
              status: 'warning',
              duration: 9000,
              isClosable: true,
              position: 'top-right',
              variant: 'left-accent',
            });
          }
        }}
        isLoading={isLoading}
        fontSize="14px"
        fontWeight="500"
      >
        <FacebookIcon />
        <Text marginLeft="12px">Continue with Facebook</Text>
      </Button>
      <OrDivider />
      {children}
    </Container>
  );
};

export default LoginContainer;
