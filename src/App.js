import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import useLogic from './components/hooks/useLogic';
import nbaImages from './components/utils/nbaImages';

const App = () => {
  const { currentScore, highScore, inputMove } = useLogic(nbaImages.length);

  return (
    <AppWrapper>
      <Header currentScore={currentScore} highScore={highScore} />
      <Main onClick={(id) => inputMove(id)} />
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
