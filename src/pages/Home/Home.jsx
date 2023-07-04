import React, { useState } from 'react';
import { Box } from 'components/Box';
import { HomeContainer } from './Home.styled';
import { Hero } from 'components/Hero';
import { QuoteField } from 'components/QuoteField';
import { NextQuoteButton } from 'components/NextQuoteButton';
import data from '../../data/quotes.json';

export const Home = () => {
  const [quote, setQuote] = useState(data[1].quote);

  const handleClick = () => {
    const randomQuote = Math.floor(Math.random() * data.length);
    setQuote(data[randomQuote].quote);
  };

  return (
    <Box className="homeWrapper" display="flex" justifyContent="center">
      <HomeContainer>
        <Hero />
        <QuoteField quote={quote} />
        <NextQuoteButton onClick={handleClick} />
      </HomeContainer>
    </Box>
  );
};
