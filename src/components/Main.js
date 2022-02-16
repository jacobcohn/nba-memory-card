import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Main = () => {
  const getCards = () => {
    const cards = [];

    for (let i = 0; i < 16; i += 1) {
      cards.push(<Card key={i} />);
    }

    return cards;
  };

  return (
    <MainWrapper>
      {getCards()}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1;
  padding: 1em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
  grid-auto-rows: 8em;
`;

export default Main;
