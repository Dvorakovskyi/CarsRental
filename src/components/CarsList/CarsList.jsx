import React from "react";
import PropTypes from "prop-types";
import CarsItem from "../CarsItem/CarsItem";
import { StyledList } from "./CarsList.styled";

const CarsList = ({ cars }) => {
  return (
    <StyledList>
      {cars.map((car) => {
        return <CarsItem key={car.id} car={car} />;
      })}
    </StyledList>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.array,
};
