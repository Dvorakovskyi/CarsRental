import React from "react";
import heroImg from "../../images/hero/img.jpg";
import {
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroDesc,
  StyledHeroItem,
  StyledLink,
} from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <StyledHeroWrapper>
        <StyledHeroImg src={heroImg} alt="People in the car" />
        <div>
          <StyledHeroDesc>Top tips for renting a car in Ukraine</StyledHeroDesc>
          <ul>
            <StyledHeroItem>
              25% of our users found rental cars for $35 or less
            </StyledHeroItem>
            <StyledHeroItem>
              Book your rental car at least 1 day before your trip in order to
              get a below-average price
            </StyledHeroItem>
            <StyledHeroItem>
              Choose comfort and safety - rent our cars with driver
            </StyledHeroItem>
            <StyledHeroItem>
              Get maximum protection from unexpected situations on the road
            </StyledHeroItem>
          </ul>
        </div>
      </StyledHeroWrapper>
      <StyledLink to="/catalog">Catalog</StyledLink>
    </>
  );
};

export default Hero;
