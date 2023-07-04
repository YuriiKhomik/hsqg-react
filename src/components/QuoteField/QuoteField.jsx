import { StyledQuoteField, StyledQuote } from './QuoteField.styled';

export const QuoteField = ({ quote }) => {
  return (
    <StyledQuoteField>
      <StyledQuote>{quote}</StyledQuote>
    </StyledQuoteField>
  );
};
