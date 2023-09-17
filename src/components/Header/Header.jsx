import React from "react";
import Navigation from "../Navigation/Navigation";
import { StyledTitle, StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle href="/">Cars Rental</StyledTitle>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
