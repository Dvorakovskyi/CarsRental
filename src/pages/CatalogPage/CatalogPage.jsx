import React, { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import Loader from "../../components/Loader/Loader";
import CarsList from "../../components/CarsList/CarsList.jsx";
import { getAllCars } from "../../api/advertsApi";
import { Container } from "../../styles/GlobalStyles";
import { StyledLoaderWrapper } from "../../components/Loader/Loader.styled";
import { StyledMoreBtn } from "../../components/CarsList/CarsList.styled";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const itemsOnPage = 8;

  const currentCars = cars.slice(0, page * itemsOnPage);

  useEffect(() => {
    getAllCars()
      .then((data) => {
        setIsLoader(false);

        setCars(data);
      })
      .catch((error) => setError(error.message))
      .finally(setIsLoader(false));
  }, []);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      {error && Notify.failure("Something went wrong, please try again later")}
      {isLoader ? (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      ) : (
        <Container>
          <CarsList cars={currentCars} />
          {currentCars.length < cars.length && (
            <StyledMoreBtn type="button" onClick={handleLoadMoreClick}>
              Load more
            </StyledMoreBtn>
          )}
        </Container>
      )}
    </>
  );
};

export default CatalogPage;
