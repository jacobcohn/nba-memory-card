import { renderHook, act } from '@testing-library/react-hooks';
import useMoveChecker from '../components/hooks/useMoveChecker';

test('returns correct board initially', () => {
  const { result } = renderHook(() => useMoveChecker(4));

  expect(result.current.getIndex(0)).toBe(false);
  expect(result.current.getIndex(1)).toBe(false);
  expect(result.current.getIndex(2)).toBe(false);
  expect(result.current.getIndex(3)).toBe(false);
});

test('updateBoard changes that specific index to true', () => {
  const { result } = renderHook(() => useMoveChecker(4));

  act(() => result.current.updateIndex(2));

  expect(result.current.getIndex(0)).toBe(false);
  expect(result.current.getIndex(1)).toBe(false);
  expect(result.current.getIndex(2)).toBe(true);
  expect(result.current.getIndex(3)).toBe(false);
});

test('updateBoard chang index to true', () => {
  const { result } = renderHook(() => useMoveChecker(4));

  act(() => result.current.updateIndex(2));
  act(() => result.current.resetBoard());

  expect(result.current.getIndex(0)).toBe(false);
  expect(result.current.getIndex(1)).toBe(false);
  expect(result.current.getIndex(2)).toBe(false);
  expect(result.current.getIndex(3)).toBe(false);
});
