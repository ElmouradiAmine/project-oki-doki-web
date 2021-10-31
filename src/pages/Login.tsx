import React from 'react';
import { Divider, Text, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import LoginContainer from 'features/auth/components/LoginContainer/LoginContainer';
import LoginForm from 'features/auth/components/LoginForm/LoginForm';
import background from 'assets/images/background.jpeg';

export const Login = () => {
  return (
    <Layout
      background={`linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
      ),url(${background})`}
    >
      <LoginContainer>
        <LoginForm />
        <Divider />
        <Text fontSize="13px" textAlign="center">
          Don&apos;t have an account?
          <Link as={RouteLink} to="signup" color="brand.500" fontWeight="bold" marginLeft="5px">
            Sign up
          </Link>
        </Text>
      </LoginContainer>
    </Layout>
  );
};
