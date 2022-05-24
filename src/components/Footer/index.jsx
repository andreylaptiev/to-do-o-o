import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import home from '../../assets/icons/home.svg';
import calendar from '../../assets/icons/calendar.svg';
import menu from '../../assets/icons/menu.svg';

const Icon = styled.img`
  width: 2rem;
`;

const StyledFooter = styled.div`
  border-top: 1px solid #c4c4c4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;

  & + & {
    border-left: 1px solid #c4c4c4;
  }

  &.active {
    background-color: #f5f5f5;
  }
`;

const Footer = () => {
  const footerLinks = [
    {to: '/', icon: home, alt: 'home'},
    {to: 'calendar', icon: calendar, alt: 'calendar'},
    {to: 'menu', icon: menu, alt: 'menu'}
  ];

  return (
    <StyledFooter>
      {footerLinks.map((link, i) => (
        <StyledNavLink key={i} to={link.to}>
          <Icon src={link.icon} alt={link.alt} />
        </StyledNavLink>
      ))}
    </StyledFooter>
  );
}

export default Footer;
