import { useState } from 'react';

const useCurrentScore = () => {
  const [currentScore, setCurrentScore] = useState(0);

  const increment = () => setCurrentScore(currentScore + 1);
  const reset = () => setCurrentScore(0);

  return { currentScore, increment, reset };
};

export default useCurrentScore;
