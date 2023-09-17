import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import heart from "../../images/heart.svg";
import favotite from "../../images/favorite.svg";

export const StyledList = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const StyledItem = styled.li`
  position: relative;
  flex-basis: calc((100% - 3 * 29px) / 4);
  width: 274px;

  list-style: none;

  &:not(:nth-last-child(-n + 4)) {
    margin-bottom: 21px;
  }
`;

export const StyledImg = styled.img`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 10px;
`;

export const StyledCarTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  color: ${colors.mainTextColor};
`;

export const StyledModelSpan = styled.span`
  color: ${colors.mainBtnBgColor};
`;

export const StyledCarPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  color: ${colors.mainTextColor};
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  height: 24px;
  overflow: hidden;
`;

export const StyledInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const StyledInfoItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  list-style: none;

  color: ${colors.secondaryTextColor};

  &:nth-child(-n + 4) {
    margin-bottom: 4px;
  }

  &:not(:last-child) {
    margin-right: 6px;
  }

  &:not(:last-child) {
    &::after {
      content: "";
      margin-left: 6px;
      width: 16px;
      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }
`;

export const StyledLearnBtn = styled.button`
  padding: 12px 99.5px;
  white-space: nowrap;
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  color: ${colors.mainBtnColor};
  background-color: ${colors.mainBtnBgColor};

  border: none;
  border-radius: 10px;

  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: ${colors.hoverColor};
  }
`;

export const StyledMoreBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: block;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;

  color: ${colors.mainBtnBgColor};
  background-color: transparent;

  border: none;
  text-decoration: underline;

  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: ${colors.hoverColor};
  }
`;

export const StyledFavoriteIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: background-image 250ms ease;
  background-image: url(${heart});

  &:hover {
    background-image: url(${favotite});
  }
`;

export const StyledIsFavorite = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  background-image: url(${favotite});
`;
