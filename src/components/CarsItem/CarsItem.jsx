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
  StyledFavoriteIcon,
  StyledIsFavorite,
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
  const [carIsFavorite, setCarIsFavorite] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);

    document.body.classList.add("no-scroll");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);

    document.body.classList.remove("no-scroll");
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

  const addToFavorites = (car) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(car);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const removeFromFavorites = (car) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter(
      (favoriteCar) => favoriteCar.id !== car.id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const toggleFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some(
      (favoriteCar) => favoriteCar.id === car.id
    );

    setCarIsFavorite(!carIsFavorite);

    if (isFavorite) {
      removeFromFavorites(car);
    } else {
      addToFavorites(car);
    }
  };

  return (
    <StyledItem key={id}>
      {carIsFavorite ? (
        <StyledIsFavorite onClick={toggleFavorites} />
      ) : (
        <StyledFavoriteIcon onClick={toggleFavorites} />
      )}

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
