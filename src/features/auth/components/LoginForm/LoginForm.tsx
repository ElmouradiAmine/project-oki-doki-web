import React, { useState, SyntheticEvent } from 'react';
import * as yup from 'yup';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { useAuth } from 'store';
import { AuthTypes } from 'features/auth/types';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading, login } = useAuth();

  const validate = () => {
    return schema.isValidSync({ email, password });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (validate()) await login({ type: AuthTypes.STANDARD_AUTH, payload: { email, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel fontWeight="bold" fontSize="14px">
            Email
          </FormLabel>
          <Input
            fontSize="14px"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel fontWeight="bold" fontSize="14px">
            Password
          </FormLabel>
          <PasswordInput
            fontSize="14px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <Text fontSize="12px" alignSelf="flex-start">
          Forgot password?
        </Text>
        <Button
          type="submit"
          colorScheme="brand"
          fontWeight="bold"
          onClick={handleSubmit}
          disabled={!validate()}
          isLoading={isLoading}
          isFullWidth
        >
          Log in
        </Button>
        <ErrorMessage error={error} />
      </VStack>
    </form>
  );
};

export default LoginForm;
