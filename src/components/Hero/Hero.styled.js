import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/GlobalStyles";

export const StyledHeroWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const StyledHeroImg = styled.img`
  width: 563px;
  height: 375px;

  border-radius: 8px;
`;

export const StyledHeroDesc = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 400px;

  font-size: 24px;

  color: ${colors.mainTextColor};
`;

export const StyledHeroItem = styled.li`
  margin-bottom: 8px;
  font-size: 20px;

  color: ${colors.mainTextColor};
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 44px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  color: ${colors.mainBtnColor};
  background-color: ${colors.mainBtnBgColor};
  border-radius: 10px;
  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: ${colors.hoverColor};
  }
`;
