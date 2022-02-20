import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import nbaImages from './utils/nbaImages';
import shuffle from './utils/shuffle';
import { v4 as uuidv4 } from 'uuid';

const Main = ({ onClick }) => {
  const [currentNBAImages, setCurrentNBAImages] = useState(nbaImages);
  
  useEffect(() => {
    setCurrentNBAImages(shuffle(nbaImages));
  }, []);
  
  const handleClick = (id) => {
    setCurrentNBAImages(shuffle(nbaImages));
    onClick(id);
  };

  return (
    <MainWrapper>
      {currentNBAImages.map((team) => <Card key={uuidv4()} id={team.id} src={team.src} name={team.name} onClick={handleClick}/>)}
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
