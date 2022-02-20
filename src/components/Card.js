import React from "react";
import styled from "styled-components";

const Card = ({ id, src, name, onClick }) => {
  return (
    <CardWrapper onClick={() => onClick(id)}>
      <img src={src} alt={`${name} Logo`} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: ${(props) => props.theme.white};
  border: ${(props) => props.theme.black} 0.2em solid;
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.gray};
  }
`;

export default Card;
