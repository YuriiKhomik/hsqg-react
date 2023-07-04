import styled from 'styled-components';
import { breakpoints } from 'constants/variables';

export const StyledQuoteField = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 210px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 40px;
  border: 5px solid ${p => p.theme.colors.black};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 250px;
  }
`;

export const StyledQuote = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;
