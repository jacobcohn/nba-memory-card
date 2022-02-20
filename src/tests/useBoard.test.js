import { renderHook, act } from '@testing-library/react-hooks';
import useBoard from '../components/hooks/useBoard';

test('returns correct board initially', () => {
  const { result } = renderHook(() => useBoard(4));

  expect(result.current.getIndex(0)).toBe(false);
  expect(result.current.getIndex(1)).toBe(false);
  expect(result.current.getIndex(2)).toBe(false);
  expect(result.current.getIndex(3)).toBe(false);
});

test('updateBoard changes that specific index to true', () => {
  const { result } = renderHook(() => useBoard(4));

  act(() => result.current.updateIndex(2));

  expect(result.current.getIndex(0)).toBe(false);
  expect(result.current.getIndex(1)).toBe(false);
  expect(result.current.getIndex(2)).toBe(true);
  expect(result.current.getIndex(3)).toBe(false);
});

test('updateBoard chang index to true', () => {
  const { result } = renderHook(() => useBoard(4));

  act(() => result.current.updateIndex(2));
  act(() => result.current.reset());

  expect(result.current.getIndex(0)).toBe(false);
  expect(result.current.getIndex(1)).toBe(false);
  expect(result.current.getIndex(2)).toBe(false);
  expect(result.current.getIndex(3)).toBe(false);
});
