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
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};

  -webkit-text-fill-color: ${p => p.theme.colors.white};
  -webkit-text-stroke-width: 0.7px;
  -webkit-text-stroke-color: ${p => p.theme.colors.black};
  -webkit-text-stroke: 0.7px ${p => p.theme.colors.black};
  text-fill-color: ${p => p.theme.colors.white};
  text-stroke-width: 0.7px;
  text-stroke-color: ${p => p.theme.colors.black};

  margin: 0 auto 16px;
  padding: 12px 16px;
  min-height: 30px;
  min-width: 200px;
  border: 4px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.pink};

  &.active {
    background-color: ${p => p.theme.colors.blue};
  }

  &:hover {
    background-color: ${p => p.theme.colors.blue};
  }
`;
