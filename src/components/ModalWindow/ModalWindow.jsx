import React from "react";
import PropTypes from "prop-types";
import BenefitsList from "../BenefitsList/BenefitsList";
import { StyledBackdrop, StyledModal } from "./ModalWindow.styled";
import {
  StyledCarTitle,
  StyledModelSpan,
  StyledInfoList,
  StyledInfoItem,
} from "../CarsList/CarsList.styled";

const ModalWindow = ({ car, closeModal }) => {
  console.log(car);
  const {
    id,
    make,
    model,
    year,
    img,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
    photoLink,
  } = car;

  const [, city, country] = address.split(",");

  const benefits = [...accessories, ...functionalities];

  let imgPath = "";

  img ? (imgPath = img) : (imgPath = photoLink);

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal>
        <img src={imgPath} alt={make} />
        <StyledCarTitle>
          {make} <StyledModelSpan>{model}</StyledModelSpan>, {year}
        </StyledCarTitle>
        <StyledInfoList>
          <StyledInfoItem>{city}</StyledInfoItem>
          <StyledInfoItem>{country}</StyledInfoItem>
          <StyledInfoItem>{`Id:${id}`}</StyledInfoItem>
          <StyledInfoItem>{`Year: ${year}`}</StyledInfoItem>
          <StyledInfoItem>{`Type: ${type}`}</StyledInfoItem>
          <StyledInfoItem>{`Fuel Consumption: ${fuelConsumption}`}</StyledInfoItem>
          <StyledInfoItem>{`Engine Size: ${engineSize}`}</StyledInfoItem>
        </StyledInfoList>
        <p>{description}</p>
        <p>Accessories and functionalities:</p>
        <BenefitsList benefits={benefits}/>
        <p>Rental Conditions:</p>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default ModalWindow;

ModalWindow.propTypes = {
    car: PropTypes.object,
    closeModal: PropTypes.func,
}