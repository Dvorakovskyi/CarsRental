import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 50px;
`;

export const StyledTitle = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;
  text-decoration: none;

  color: ${colors.mainTextColor};
`;
