import React from 'react';
import { Divider, Text, Link } from '@chakra-ui/react';

import LoginContainer from 'features/auth/components/LoginContainer/LoginContainer';
import LoginForm from 'features/auth/components/LoginForm/LoginForm';

type LoginProps = {
  onModeChange: () => void;
};

const Login = ({ onModeChange }: LoginProps) => {
  return (
    <LoginContainer>
      <LoginForm />
      <Divider />
      <Text fontSize="13px" textAlign="center">
        Don&apos;t have an account?
        <Text
          as={Link}
          fontSize="13px"
          margin="0"
          padding="0"
          color="brand.500"
          fontWeight="bold"
          marginLeft="5px"
          onClick={onModeChange}
        >
          Sign up
        </Text>
      </Text>
    </LoginContainer>
  );
};

export default Login;
