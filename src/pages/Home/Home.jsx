import React, { useRef } from 'react';
import { Box } from 'components/Box';
import { Donut, Donut2, HomeContainer } from './Home.styled';
import donutImage from 'images/donut.png';
import donutImage2 from 'images/donut2.png';
import { Burger } from 'components/Burger';
import { Menu } from 'components/Navigation';
import { useOnClickOutside } from 'hooks/hooks';

export const Home = ({ open, setOpen }) => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Box display="flex" justifyContent="center">
      <Box ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Box>
      <Donut src={donutImage} />
      <Donut2 src={donutImage2} />
      <HomeContainer>
        Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        sequi voluptas magni beatae magnam quasi excepturi a similique
        laudantium neque ipsa exercitationem aliquam eos, placeat accusamus
        impedit laborum nemo facere? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Fugit similique quam repellendus at quia fugiat,
        numquam omnis alias nobis itaque, sint doloribus harum. Repellendus,
        harum! Exercitationem libero enim pariatur tempore!
      </HomeContainer>
    </Box>
  );
};
