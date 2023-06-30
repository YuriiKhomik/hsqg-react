import React from 'react';
import { Box } from 'components/Box';
import { HomeContainer } from './Home.styled';
import { Hero } from 'components/Hero';
import { QuoteField } from 'components/QuoteField';
import { NextQuoteButton } from 'components/NextQuoteButton';

export const Home = () => {
  return (
    <Box display="flex" justifyContent="center">
      <HomeContainer>
        <Hero />
        <QuoteField />
        <NextQuoteButton />
      </HomeContainer>
    </Box>
  );
};
