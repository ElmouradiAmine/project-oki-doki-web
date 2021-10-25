import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from 'components/Icons/SearchIcon';

const Searchbar = () => {
  return (
    <InputGroup width="292px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="search" placeholder="Search pages and products" />
    </InputGroup>
  );
};

export default Searchbar;
