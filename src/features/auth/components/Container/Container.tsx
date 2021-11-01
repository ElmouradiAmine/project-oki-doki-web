import React, { FC } from 'react';
import { VStack, Heading, Box, Button, useToast, Text } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-icon.svg';
import OrDivider from 'components/OrDivider/OrDivider';
import { AuthTypes } from 'features/auth/types';
import { useAuth } from 'store';

type ContainerProps = {
  title: string;
};

const Container: FC<ContainerProps> = ({ children, title }) => {
  const { login, isLoading } = useAuth();
  const toast = useToast();
  return (
    <VStack width="400px" padding="24px" borderRadius="5px" alignItems="stretch" bgColor="white">
      <Logo height="48px" />
      <Heading fontSize="3xl">{title}</Heading>
      <Box height="16px" />
      <VStack spacing={4} alignItems="stretch">
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
      </VStack>
    </VStack>
  );
};

export default Container;
