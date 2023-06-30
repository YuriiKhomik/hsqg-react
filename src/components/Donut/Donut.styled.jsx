import styled from 'styled-components';
import { breakpoints } from 'constants/variables';

export const DonutBottom = styled.img`
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

export const DonutTop = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(37%, -40%) rotate(90deg);
  z-index: -1;
  width: 300px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 200px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 560px;
  }
`;
