import React from 'react';

import { Divider, Text, Link } from '@chakra-ui/react';

import SignupContainer from '../SignupContainer/SignupContainer';
import SignupForm from '../SignupForm/SignupForm';

type SignupProps = {
  onModeChange: () => void;
};

const Signup = ({ onModeChange }: SignupProps) => {
  return (
    <SignupContainer>
      <SignupForm />
      <Text fontSize="12px" textAlign="center" opacity="0.8">
        By continuing, you agree to Signal’s <strong>Terms of Service</strong> and confirm that you
        have read Signal’s <strong>Privacy Policy</strong>.
      </Text>
      <Divider />
      <Text fontSize="13px" textAlign="center">
        Already have an account?
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
          Log in
        </Text>
      </Text>
    </SignupContainer>
  );
};

export default Signup;
