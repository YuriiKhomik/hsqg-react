import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;

  width: 
  color: ${p => p.theme.colors.white};

  &.active {
    background-color: ${p => p.theme.colors.blue};
  }
`;
