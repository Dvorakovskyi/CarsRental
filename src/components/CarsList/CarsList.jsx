import React from "react";
import PropTypes from "prop-types";
import {
  StyledList,
  StyledImg,
  StyledItem,
  StyledCarTitle,
  StyledModelSpan,
  StyledCarPrice,
  StyledWrapper,
  StyledInfoList,
  StyledInfoItem,
  StyledLearnBtn,
} from "./CarsList";

const CarsList = ({ cars }) => {
  return (
    <StyledList>
      {cars.map(
        ({
          id,
          make,
          model,
          img,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          accessories,
        }) => {
          const [, city, country] = address.split(",");

          const benefits = accessories[1];

          return (
            <StyledItem key={id}>
              <StyledImg src={img} alt={make} />
              <StyledWrapper>
                <StyledCarTitle>
                  {make} <StyledModelSpan>{model}</StyledModelSpan>, {year}
                </StyledCarTitle>
                <StyledCarPrice>{rentalPrice}</StyledCarPrice>
              </StyledWrapper>
              <StyledInfoList>
                <StyledInfoItem>{city}</StyledInfoItem>
                <StyledInfoItem>{country}</StyledInfoItem>
                <StyledInfoItem>{rentalCompany}</StyledInfoItem>
                <StyledInfoItem>{type}</StyledInfoItem>
                <StyledInfoItem>{make}</StyledInfoItem>
                <StyledInfoItem>{id}</StyledInfoItem>
                <StyledInfoItem>{benefits}</StyledInfoItem>
              </StyledInfoList>
              <StyledLearnBtn type="button">Learn more</StyledLearnBtn>
            </StyledItem>
          );
        }
      )}
    </StyledList>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.array,
};
