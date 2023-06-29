import React from 'react';
import { Box } from 'components/Box';
import { HomeContainer } from './Home.styled';
import { Hero } from 'components/Hero';
import { QuoteField } from 'components/QuoteField';

export const Home = () => {
  return (
    <Box display="flex" justifyContent="center">
      <HomeContainer>
        <Hero />
        <QuoteField />
      </HomeContainer>
    </Box>
  );
};
