import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

type ErrorMessageProps = {
  error: string | undefined;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return error ? (
    <Alert status="error">
      <AlertIcon />
      {error}
    </Alert>
  ) : (
    <></>
  );
};

export default ErrorMessage;
