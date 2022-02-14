import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

const mockScoreFn = jest.fn();
jest.mock('../components/Score', () => () => {
  mockScoreFn();
  return <div />;
});

test('renders correct text', () => {
  render(<Header />);
  expect(screen.getByText(/nba memory card/i)).toBeInTheDocument();
});

test('renders Score components with correct props', () => {
  render(<Header />);
  expect(mockScoreFn.mock.calls.length).toBe(2);
});
