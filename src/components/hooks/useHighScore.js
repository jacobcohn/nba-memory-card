import { useState, useEffect } from 'react';

const useHighScore = (currentScore) => {
  const [highScore, setHighScore] = useState(currentScore);

  useEffect(() => {
    if (currentScore > highScore) setHighScore(currentScore);
  }, [currentScore, highScore]);

  return highScore;
};

export default useHighScore;
