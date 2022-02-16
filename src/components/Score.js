import React from "react";
import styled from "styled-components";

const Score = ({ title = "Score", score = 0 }) => {
  return (
    <ScoreWrapper>
      <ScoreText>{title}: {score}</ScoreText>
    </ScoreWrapper>
  );
};

const ScoreWrapper = styled.div`
  font-size: 1.6em;
  background: ${(props) => props.theme.blue};
  padding: 0.3em;
  margin: 0.6em;
  border: ${(props) => props.theme.white} solid 0.1em;
  border-radius: 0.3em;
  display: flex;
`;

const ScoreText = styled.h1`
  font-size: inherit;
`;

export default Score
