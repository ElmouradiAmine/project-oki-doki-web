import AuthButtons from 'components/AuthButtons/AuthButtons';
import Menu from 'components/Menu/Menu';
import Searchbar from 'components/Searchbar/Searchbar';
import React from 'react';
import { useAuth } from 'store';
import { ReactComponent as LogoText } from 'assets/icons/logo-text.svg';
import HeaderContainer from './HeaderContainer';

const Header = () => {
  const { isAuthenticated } = useAuth();
  return (
    <HeaderContainer>
      <LogoText height="32px" />
      <Searchbar />
      {isAuthenticated ? <Menu /> : <AuthButtons />}
    </HeaderContainer>
  );
};

export default Header;
