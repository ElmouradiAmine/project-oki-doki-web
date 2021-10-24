import React, { useState, SyntheticEvent } from 'react';
import * as yup from 'yup';
import { FormControl, FormErrorMessage, FormLabel, Input, VStack, Button } from '@chakra-ui/react';

import PasswordInput from 'components/PasswordInput/PasswordInput';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { useAuth } from 'store';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading, signup } = useAuth();

  const validate = () => {
    return schema.isValidSync({ email, password });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (validate()) await signup({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="twitter"
          onClick={handleSubmit}
          disabled={!validate()}
          isLoading={isLoading}
          isFullWidth
        >
          Sign up
        </Button>
        <ErrorMessage error={error} />
      </VStack>
    </form>
  );
};

export default SignupForm;
