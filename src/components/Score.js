import React from "react";
import styled from "styled-components";

const Score = ({ title = "Score", score = 0 }) => {
  return (
    <ScoreWrapper>
      <h3>{title}</h3>
      <h3>:</h3>
      <Number>{score}</Number>
    </ScoreWrapper>
  );
};

const ScoreWrapper = styled.div`
  font-size: 1.3em;
  background: ${(props) => props.theme.blue};
  padding: 0.3em;
  margin: 0.6em;
  border: ${(props) => props.theme.white} solid 0.1em;
  border-radius: 0.3em;
  display: flex;
`;

const Number = styled.h3`
  padding-left: 0.4em;
`;

export default Score
