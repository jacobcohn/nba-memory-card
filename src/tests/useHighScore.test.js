import { renderHook } from '@testing-library/react-hooks';
import useHighScore from '../components/hooks/useHighScore';

test('initially, highScore should be equal to currentScore', () => {
  const currentScore = 0;
  const { result } = renderHook(() => useHighScore(currentScore));
  expect(result.current).toBe(0);
});

test('highScore should update to the new currentScore if it is higher than previous highScore', () => {
  let currentScore = 0;
  const { result, rerender } = renderHook(() => useHighScore(currentScore));

  currentScore = 5;
  rerender();

  expect(result.current).toBe(5);
});

test('highScore should not update to the new currentScore if it is lower than previous highScore', () => {
  let currentScore = 0;
  const { result, rerender } = renderHook(() => useHighScore(currentScore));

  currentScore = 5;
  rerender();

  currentScore = 3;
  rerender();

  expect(result.current).toBe(5);
});
