import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import CarsList from "../../components/CarsList/CarsList";
import { StyledMoreBtn } from "../../components/CarsList/CarsList.styled";
import { StyledFavoriteTitle } from "./FavoritesPage.styled";

const FavoritePage = () => {
  const [page, setPage] = useState(1);
  const itemsOnPage = 8;

  const favoritesCars = JSON.parse(localStorage.getItem("favorites"));

  const currentCars = favoritesCars.slice(0, page * itemsOnPage);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      {favoritesCars > 0 ? (
        <>
          <CarsList cars={currentCars} />
          {currentCars.length < favoritesCars.length && (
            <StyledMoreBtn type="button" onClick={handleLoadMoreClick}>
              Load more
            </StyledMoreBtn>
          )}
        </>
      ) : (
        <StyledFavoriteTitle>No favorites yet</StyledFavoriteTitle>
      )}
    </Container>
  );
};

export default FavoritePage;
