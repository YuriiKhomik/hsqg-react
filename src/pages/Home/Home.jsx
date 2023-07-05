import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { HomeContainer } from './Home.styled';
import { Hero } from 'components/Hero';
import { QuoteField } from 'components/QuoteField';
import { NextQuoteButton } from 'components/NextQuoteButton';
import { randomIndex } from 'utils';
import { getAllQuotes } from 'redux/selectors';

export const Home = () => {
  const data = useSelector(getAllQuotes);

  const [quote, setQuote] = useState(data[randomIndex(data)].quote);

  const handleClick = () => {
    setQuote(data[randomIndex(data)].quote);
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
