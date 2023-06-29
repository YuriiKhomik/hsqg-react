import { breakpoints } from 'constants/variables';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(10px);
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  a {
    text-transform: uppercase;
    padding: 16px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: red;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: cyan;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: red;

  &.active {
    color: pink;
  }
`;
