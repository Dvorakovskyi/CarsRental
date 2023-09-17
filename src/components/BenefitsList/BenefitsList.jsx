import React from "react";
import PropTypes from "prop-types";
import { StyledInfoList, StyledInfoItem } from "../CarsList/CarsList.styled";

const BenefitsList = ({ benefits }) => {
  return (
    <StyledInfoList>
      {benefits.map((benefit) => {
        return <StyledInfoItem key={benefit}>{benefit}</StyledInfoItem>;
      })}
    </StyledInfoList>
  );
};

export default BenefitsList;

BenefitsList.propTypes = {
    benefits: PropTypes.array,
}
