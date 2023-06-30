import { StyledQuoteField, StyledQuote } from './QuoteField.styled';

export const QuoteField = ({ quote }) => {
  return (
    <StyledQuoteField>
      {/* <Box padding="15px"> */}
      <StyledQuote>{quote}</StyledQuote>
      {/* </Box> */}
    </StyledQuoteField>
  );
};
