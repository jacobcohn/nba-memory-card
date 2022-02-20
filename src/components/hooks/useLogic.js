import useBoard from './useBoard';
import useCurrentScore from './useCurrentScore';
import useHighScore from './useHighScore';

const useLogic = (length) => {
  const { getIndex, updateIndex, reset: resetBoard } = useBoard(length);
  const { currentScore, increment: incrementCurrentScore, reset: resetCurrentScore } = useCurrentScore();
  const highScore = useHighScore(currentScore);

  const isValidMove = (id) => !getIndex(id);

  const validMove = (id) => {
    updateIndex(id);
    incrementCurrentScore();
  };

  const invalidMove = () => {
    resetBoard();
    resetCurrentScore();
  };

  const inputMove = (id) => {
    if (isValidMove(id)) {
      validMove(id);
    } else {
      invalidMove();
    }
  }

  return { currentScore, highScore, inputMove };
};

export default useLogic;
