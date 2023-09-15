import React from "react";
import PropTypes from "prop-types";

const CarsList = ({ cars }) => {
  return (
    <ul>
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
            <li key={id}>
              <img src={img} alt={make} />
              <h2>
                {make} <span>{model}</span>, {year}
              </h2>
              <p>{rentalPrice}</p>
              <ul>
                <li>{city}</li>
                <li>{country}</li>
                <li>{rentalCompany}</li>
                <li>{type}</li>
                <li>{make}</li>
                <li>{id}</li>
                <li>{benefits}</li>
              </ul>
              <button type="button">Learn more</button>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.array,
};
