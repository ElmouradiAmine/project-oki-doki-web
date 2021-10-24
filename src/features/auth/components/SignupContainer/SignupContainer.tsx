import React, { FC } from 'react';
import Container from '../Container/Container';

const SignupContainer: FC = ({ children }) => {
  return <Container title="Sign up">{children}</Container>;
};

export default SignupContainer;
