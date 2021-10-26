import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const SearchIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" width="24px" height="24px" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
      />
    </Icon>
  );
};

export default SearchIcon;
