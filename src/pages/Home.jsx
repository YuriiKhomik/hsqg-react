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
  max-width: 400px;
  // overflow: hidden;
`;

const Donut = styled.img`
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

const Donut2 = styled.img`
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

export const Home = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Donut src={donutImage} />
      <Donut2 src={donutImage2} />
      <StyledHome>
        Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        sequi voluptas magni beatae magnam quasi excepturi a similique
        laudantium neque ipsa exercitationem aliquam eos, placeat accusamus
        impedit laborum nemo facere? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Fugit similique quam repellendus at quia fugiat,
        numquam omnis alias nobis itaque, sint doloribus harum. Repellendus,
        harum! Exercitationem libero enim pariatur tempore!
      </StyledHome>
    </Box>
  );
};
