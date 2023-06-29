import React from 'react';

import { StyledMenu, StyledLink } from './Navigation.styled';

export const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/" onClick={() => setOpen(false)}>
        Home
      </StyledLink>
      <StyledLink to="/favorites" onClick={() => setOpen(false)}>
        Favorites
      </StyledLink>
      <StyledLink to="/login" onClick={() => setOpen(false)}>
        Log in/Sign Up
      </StyledLink>
    </StyledMenu>
  );
};
