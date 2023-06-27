import React from 'react';
import { Box } from 'components/Box';
import backgroundImage from '../images/hsqg-background-image-saturated.jpeg';
import donutImage from '../images/donut.png';
import donutImage2 from '../images/donut2.png';
import styled from 'styled-components';
import { breakpoints } from 'constants/variables';

const StyledHome = styled.div`
  border: 1px solid red;
  height: 100vh;
  width: 100%;
`;

const Donut = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 200px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 560px;
  }
`;

const Donut2 = styled.img`
  position: absolute;
  bottom: -25%;
  left: 100px;
  z-index: -1;
`;

export const Home = () => {
  return (
    <>
      <Donut src={donutImage} />
      <StyledHome>Home</StyledHome>
    </>
  );
};
