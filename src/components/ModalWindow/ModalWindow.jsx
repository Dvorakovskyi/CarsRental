import React from "react";
import PropTypes from "prop-types";
import BenefitsList from "../BenefitsList/BenefitsList";
import iconClose from "../../images/x.svg";
import {
  StyledBackdrop,
  StyledModal,
  StyledIconClose,
  StyledModalImg,
  StyledModalTitle,
  StyledModalInfoList,
  StyledDescription,
  StyledModalWrapper,
  StyledSecTitle,
  StyledConditionsItem,
  StyledConditionsList,
  StyledConditionsSpan,
  StyledRentBtn,
} from "./ModalWindow.styled";
import { StyledModelSpan, StyledInfoItem } from "../CarsList/CarsList.styled";

const ModalWindow = ({ car, closeModal }) => {
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

  const [firstCondition, secondCondition, thirdCondition] =
    rentalConditions.split("\n");
  const [minimum, age] = firstCondition.split(":");

  let imgPath = "";

  img ? (imgPath = img) : (imgPath = photoLink);

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal>
        <StyledModalWrapper>
          <StyledIconClose src={iconClose} alt="iconClose" />
          <StyledModalImg src={imgPath} alt={make} />
          <StyledModalTitle>
            {make} <StyledModelSpan>{model}</StyledModelSpan>, {year}
          </StyledModalTitle>
          <StyledModalInfoList>
            <StyledInfoItem>{city}</StyledInfoItem>
            <StyledInfoItem>{country}</StyledInfoItem>
            <StyledInfoItem>{`Id:${id}`}</StyledInfoItem>
            <StyledInfoItem>{`Year: ${year}`}</StyledInfoItem>
            <StyledInfoItem>{`Type: ${type}`}</StyledInfoItem>
            <StyledInfoItem>{`Fuel Consumption: ${fuelConsumption}`}</StyledInfoItem>
            <StyledInfoItem>{`Engine Size: ${engineSize}`}</StyledInfoItem>
          </StyledModalInfoList>
          <StyledDescription>{description}</StyledDescription>
          <StyledSecTitle>Accessories and functionalities:</StyledSecTitle>
          <BenefitsList benefits={benefits} />
          <StyledSecTitle>Rental Conditions:</StyledSecTitle>
          <StyledConditionsList>
            <StyledConditionsItem>
              {minimum}:<StyledConditionsSpan>{age}</StyledConditionsSpan>
            </StyledConditionsItem>
            <StyledConditionsItem>{secondCondition}</StyledConditionsItem>
            <StyledConditionsItem>{thirdCondition}</StyledConditionsItem>
            <StyledConditionsItem>
              Mileage:
              <StyledConditionsSpan>
                {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </StyledConditionsSpan>
            </StyledConditionsItem>
            <StyledConditionsItem>
              Price: <StyledConditionsSpan>{rentalPrice}</StyledConditionsSpan>
            </StyledConditionsItem>
          </StyledConditionsList>
          <StyledRentBtn href="tel:+380730000000">Rental car</StyledRentBtn>
        </StyledModalWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default ModalWindow;

ModalWindow.propTypes = {
  car: PropTypes.object,
  closeModal: PropTypes.func,
};
