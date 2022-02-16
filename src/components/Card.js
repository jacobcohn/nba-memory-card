import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <CardWrapper></CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: ${(props) => props.theme.blue};
  width: 100%;
  height: 100%;
`;

export default Card;
