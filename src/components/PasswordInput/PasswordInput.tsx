import React from 'react';
import { InputGroup, Input, InputRightElement, Button, InputProps } from '@chakra-ui/react';

const PasswordInput = ({ value, onChange }: InputProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type={show ? 'text' : 'password'} value={value} onChange={onChange} />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
