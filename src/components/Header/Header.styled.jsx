import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 15px;

  min-width: 80px;
  height: 32px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 8px;

  background-color: ${p => p.theme.colors.blue};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.white};

  &.active {
    background-color: ${p => p.theme.colors.pink};
  }
  &:hover {
    color: ${p => p.theme.colors.yellow};
    background-color: ${p => p.theme.colors.pink};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:last-child {
    margin-right: 120px;
  }
`;
