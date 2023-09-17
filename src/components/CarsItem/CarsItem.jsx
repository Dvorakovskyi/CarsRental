import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledImg,
  StyledItem,
  StyledCarTitle,
  StyledModelSpan,
  StyledCarPrice,
  StyledWrapper,
  StyledInfoList,
  StyledInfoItem,
  StyledLearnBtn,
} from "../CarsList/CarsList.styled";
import ModalWindow from "../ModalWindow/ModalWindow";

const CarsItem = ({ car }) => {
  const {
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
    photoLink,
  } = car;

  const [, city, country] = address.split(",");

  const benefits = accessories[1];

  let imgPath = "";

  img ? (imgPath = img) : (imgPath = photoLink);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);

    document.body.classList.add("no-scroll");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    event.key === "Escape" && setIsModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <StyledItem key={id}>
      <StyledImg src={imgPath} alt={make} />
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
      <StyledLearnBtn type="button" onClick={handleModalOpen}>
        Learn more
      </StyledLearnBtn>
      {isModalOpen && <ModalWindow car={car} closeModal={handleModalClose} />}
    </StyledItem>
  );
};

export default CarsItem;

CarsItem.propTypes = {
  car: PropTypes.object,
};
