import styled from 'styled-components';

export const StyledNQButton = styled.button`
  min-width: 150px;
  min-height: 50px;
  border: 4px solid ${p => p.theme.colors.black};
  border-radius: 15px;
  box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.pink};
    color: ${p => p.theme.colors.yellow};
  }
`;
