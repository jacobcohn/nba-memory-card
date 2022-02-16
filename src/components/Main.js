import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import nbaImages from './utils/nbaImages';

const Main = () => {
  return (
    <MainWrapper>
      {nbaImages.map((team, index) => <Card key={index} src={team.src} name={team.name} />)}
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
