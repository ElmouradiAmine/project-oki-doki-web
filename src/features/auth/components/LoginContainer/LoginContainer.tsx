import React, { FC } from 'react';
import Container from '../Container/Container';

const LoginContainer: FC = ({ children }) => {
  return <Container title="Log in">{children}</Container>;
};

export default LoginContainer;
