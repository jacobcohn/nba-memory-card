import React from "react";
import styled from "styled-components";
import Score from "./Score";

const Header = ({ currentScore, highScore }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>NBA Memory Card</HeaderTitle>
      <ScoresWrapper>
        <Score title={"Current Score"} score={currentScore} />
        <Score title={"High Score"} score={highScore} />
      </ScoresWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    font-size: 0.85em;
  }

  @media (max-width: 425px) {
    font-size: 0.7em;
  }

  @media (max-width: 350px) {
    font-size: 0.65em;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3.5em;
  padding: 0.1em;
  padding-top: 0.2em;
`;

const ScoresWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2em;
`;

export default Header;
