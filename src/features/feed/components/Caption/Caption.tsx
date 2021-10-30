import React from 'react';
import { Text } from '@chakra-ui/react';

type CaptionProps = {
  description: string;
};

const Caption = ({ description }: CaptionProps) => {
  return (
    <Text
      fontSize="16px"
      lineHeight="22px"
      color="rgb(18, 18, 18)"
      flex="0 0 auto"
      wordBreak="break-word"
      marginBottom="24px"
    >
      {description}
    </Text>
  );
};

export default Caption;
