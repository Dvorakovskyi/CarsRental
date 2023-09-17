import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/GlobalStyles";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-left: 60px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  transition: color 250ms ease;

  color: ${colors.mainTextColor};

  &:hover,
  &:focus {
    color: ${colors.hoverColor};
  }

  &:active {
    color: ${colors.hoverColor};
  }
`;
