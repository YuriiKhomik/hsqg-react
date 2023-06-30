import { StyledNQButton } from './NextQuoteButton.styled';

export const NextQuoteButton = ({ onClick }) => {
  return (
    <StyledNQButton type="button" onClick={onClick}>
      NEXT QUOTE
    </StyledNQButton>
  );
};
