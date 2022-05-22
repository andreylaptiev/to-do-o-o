import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import cross from '../../assets/icons/cross.svg';
import logo from '../../assets/icons/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

const Logo = styled.img`
  width: 4rem;
`;

const Cross = styled.img`
  width: 2.5rem;
`;

const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <div>
        <Link to={"/"}>
          <Logo src={logo} alt="logo" />
        </Link>
      </div>
      {location.pathname !== "/" &&
        <Link to="/">
          <Cross src={cross} alt="cross" />
        </Link>
      }
    </StyledHeader>
  );
}

export default Header;
