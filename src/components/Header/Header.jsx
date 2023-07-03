import { StyledLink, StyledNav } from './Header.styled';

export const Header = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
      <StyledLink to="/notFound">Log In/Sign Up</StyledLink>
    </StyledNav>
  );
};
