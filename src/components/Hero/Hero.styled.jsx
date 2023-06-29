import styled from 'styled-components';

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
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  -webkit-text-fill-color: ${p => p.theme.colors.white};
  -webkit-text-stroke-width: 0.7px;
  -webkit-text-stroke-color: ${p => p.theme.colors.black};
  -webkit-text-stroke: 0.7px ${p => p.theme.colors.black};
  text-fill-color: ${p => p.theme.colors.white};
  text-stroke-width: 0.7px;
  text-stroke-color: ${p => p.theme.colors.black};
`;
