import React from "react";
import { StyledNav, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
