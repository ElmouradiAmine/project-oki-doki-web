import React from 'react';
import { InputGroup, Input, InputRightElement, InputProps, IconButton } from '@chakra-ui/react';
import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { ReactComponent as EyeCloseIcon } from 'assets/icons/eye-close.svg';

const PasswordInput = ({ value, onChange }: InputProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type={show ? 'text' : 'password'} value={value} onChange={onChange} />
      <InputRightElement width="4.5rem">
        <IconButton
          aria-label="show password"
          size="xs"
          icon={show ? <EyeCloseIcon /> : <EyeIcon />}
          onClick={handleClick}
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
