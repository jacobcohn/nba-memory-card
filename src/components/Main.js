import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import nbaImages from './utils/nbaImages';
import shuffle from './utils/shuffle';

const Main = () => {
  const [currentNBAImages, setCurrentNBAImages] = useState(nbaImages);
  
  useEffect(() => {
    setCurrentNBAImages(shuffle(nbaImages));
  }, []);
  
  const handleClick = () => {
    setCurrentNBAImages(shuffle(nbaImages));
  };

  return (
    <MainWrapper>
      {currentNBAImages.map((team) => <Card key={team.id} src={team.src} name={team.name} onClick={handleClick}/>)}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1;
  background: ${(props) => props.theme.gray};
  padding: 1em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
  grid-auto-rows: 8em;
`;

export default Main;
