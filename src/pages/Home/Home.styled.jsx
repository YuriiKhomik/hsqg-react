import styled from 'styled-components';
import { breakpoints } from 'constants/variables';

export const HomeContainer = styled.div`
  border: 1px solid red;
  height: 100vh;
  max-width: 400px;
  // overflow: hidden;
`;

export const Donut = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  z-index: -1;
  width: 400px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 200px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 560px;
  }
`;

export const Donut2 = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(50%, -50%) rotate(100deg);
  z-index: -1;
  width: 300px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 200px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 560px;
  }
`;
