import React from 'react';
import { Link, Text, Divider } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import SignupContainer from '../components/SignupContainer/SignupContainer';
import SignupForm from '../components/SignupForm/SignupForm';

export const Signup = () => {
  return (
    <Layout>
      <SignupContainer>
        <SignupForm />
        <Divider />
        <Text fontSize="sm">
          Already have an account?
          <Link as={RouteLink} to="login" color="twitter.500" fontWeight="bold" marginLeft="5px">
            Log in
          </Link>
        </Text>
      </SignupContainer>
    </Layout>
  );
};
