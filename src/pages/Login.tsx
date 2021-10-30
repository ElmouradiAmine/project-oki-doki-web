import React from 'react';
import { Divider, Text, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import LoginContainer from 'features/auth/components/LoginContainer/LoginContainer';
import LoginForm from 'features/auth/components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <Layout>
      <LoginContainer>
        <LoginForm />
        <Divider />
        <Text fontSize="sm">
          Don&apos;t have an account?
          <Link as={RouteLink} to="signup" color="twitter.500" fontWeight="bold" marginLeft="5px">
            Sign up
          </Link>
        </Text>
      </LoginContainer>
    </Layout>
  );
};
