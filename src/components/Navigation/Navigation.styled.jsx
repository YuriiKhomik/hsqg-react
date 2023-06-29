import { breakpoints } from 'constants/variables';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: blue;
  opacity: 0.5;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
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