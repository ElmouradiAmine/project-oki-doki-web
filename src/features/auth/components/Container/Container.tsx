import React, { FC } from 'react';
import { VStack, Heading, Box } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

type ContainerProps = {
  title: string;
};

const Container: FC<ContainerProps> = ({ children, title }) => {
  return (
    <VStack width="400px" padding="24px" borderRadius="5px" alignItems="stretch" bgColor="white">
      <Logo height="48px" />
      <Heading fontSize="3xl">{title}</Heading>
      <Box height="16px" />
      <VStack spacing={4} alignItems="stretch">
        {children}
      </VStack>
    </VStack>
  );
};

export default Container;
