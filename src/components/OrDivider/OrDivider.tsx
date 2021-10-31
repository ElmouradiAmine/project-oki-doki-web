import React from 'react';
import { HStack, Divider, Text } from '@chakra-ui/react';

const OrDivider = () => {
  return (
    <HStack>
      <Divider />
      <Text fontWeight="bolder" color="gray.300" fontSize="13px">
        OR
      </Text>
      <Divider />
    </HStack>
  );
};

export default OrDivider;
