import styled from 'styled-components';
import { breakpoints } from 'constants/variables';

export const StyledHero = styled.div`
  width: 100%;
  min-height: 160px;
  background-color: ${p => p.theme.colors.blue};
  border-radius: 40px;
  border: 5px solid ${p => p.theme.colors.black};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-bottom: 70px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 200px;
  }
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.white};
  text-shadow: 0.7px 0px ${p => p.theme.colors.black},
    0px 0.7px ${p => p.theme.colors.black},
    -0.7px 0px ${p => p.theme.colors.black},
    0px -0.7px ${p => p.theme.colors.black};
`;
