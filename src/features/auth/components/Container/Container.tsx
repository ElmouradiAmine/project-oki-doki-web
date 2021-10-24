import React, { FC } from 'react';
import { VStack, Heading } from '@chakra-ui/react';

type ContainerProps = {
  title: string;
};

const Container: FC<ContainerProps> = ({ children, title }) => {
  return (
    <VStack width="400px" padding="24px" borderRadius="5px" alignItems="stretch" spacing={4}>
      <Heading textAlign="center">{title}</Heading>
      {children}
    </VStack>
  );
};

export default Container;
