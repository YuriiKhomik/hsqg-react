import styled from 'styled-components';
import { breakpoints } from 'constants/variables';

export const HomeContainer = styled.div`
  margin-top: 85px;
  border: 1px solid red;
  text-align: center;
  max-width: 400px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 600px;
  }
`;
