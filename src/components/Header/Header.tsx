import AuthButtons from 'components/AuthButtons/AuthButtons';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import Searchbar from 'components/Searchbar/Searchbar';
import React from 'react';
import { useAuth } from 'store';
import HeaderContainer from './HeaderContainer';

const Header = () => {
  const { isAuthenticated } = useAuth();
  return (
    <HeaderContainer>
      <Logo />
      <Searchbar />
      {isAuthenticated ? <Menu /> : <AuthButtons />}
    </HeaderContainer>
  );
};

export default Header;
