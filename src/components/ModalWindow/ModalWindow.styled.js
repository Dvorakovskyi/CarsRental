import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { StyledInfoList } from "../CarsList/CarsList.styled";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  overflow: hidden;

  background-color: white;
  border-radius: 14px;
`;

export const StyledModalWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 461px;
`;

export const StyledIconClose = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const StyledModalImg = styled.img`
  display: block;

  margin-bottom: 14px;
  width: 461px;
  height: 248px;
  border-radius: 12px;
`;

export const StyledModalTitle = styled.h2`
  margin-bottom: 8px;
  width: 461px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  color: ${colors.mainTextColor};
`;

export const StyledModalInfoList = styled(StyledInfoList)`
  margin-bottom: 14px;
  width: 300px;
`;

export const StyledDescription = styled.p`
  margin-bottom: 24px;
  width: 461px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  color: ${colors.mainTextColor};
`;

export const StyledSecTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  color: ${colors.mainTextColor};
`;

export const StyledConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledConditionsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
  white-space: nowrap;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  list-style: none;

  color: #363535;
  background-color: #f9f9f9;
  border-radius: 133px;
`;

export const StyledConditionsSpan = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;

  color: ${colors.mainBtnBgColor};
`;

export const StyledRentBtn = styled.a`
  padding: 12px 50px;

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
