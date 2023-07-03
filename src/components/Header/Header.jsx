import { StyledLink, StyledNav } from './Header.styled';
import { Box } from 'components/Box';

export const Header = () => {
  return (
    <StyledNav>
      <Box display="flex">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Box>
      <Box display="flex">
        <StyledLink to="/notFound">Register</StyledLink>
        <StyledLink to="/notFound">Log In</StyledLink>
      </Box>
    </StyledNav>
  );
};
