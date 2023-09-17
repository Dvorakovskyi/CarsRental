import React from "react";
import { StyledBackdrop, StyledModal } from "./ModalWindow.styled";

const ModalWindow = ({car}) => {
    console.log(car)


  return (
    <StyledBackdrop>
      <StyledModal></StyledModal>
    </StyledBackdrop>
  );
};

export default ModalWindow;
