import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import AuthorInfoContainer from './AuthorInfoContainer';

type AuthorInfoProps = {
  name: string;
  nickname: string;
};

const AuthorInfo = ({ name, nickname }: AuthorInfoProps) => {
  return (
    <AuthorInfoContainer>
      <Link
        href="/"
        fontWeight="bold"
        lineHeight="24px"
        fontSize="18px"
        marginBottom="0"
        marginRight="4px"
      >
        {name}
      </Link>
      <Text padding="0" margin="0" fontSize="sm" color="rgba(22, 24, 35, 0.6)">
        @{nickname}
      </Text>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
