import { renderHook, act } from '@testing-library/react-hooks';
import useCurrentScore from '../components/hooks/useCurrentScore';

test('currentScore is 0 initially', () => {
  const { result } = renderHook(() => useCurrentScore());
  expect(result.current.currentScore).toBe(0);
});

test('when increment is called 3 times, current score should be 3', () => {
  const { result } = renderHook(() => useCurrentScore());

  act(() => result.current.increment());
  act(() => result.current.increment());
  act(() => result.current.increment());

  expect(result.current.currentScore).toBe(3);
});

test('when reset is called, current score should be 0', () => {
  const { result } = renderHook(() => useCurrentScore());

  act(() => result.current.increment());
  act(() => result.current.increment());
  act(() => result.current.increment());

  act(() => result.current.reset());

  expect(result.current.currentScore).toBe(0);
});
