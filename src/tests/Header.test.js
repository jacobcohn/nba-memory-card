import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

jest.mock('../components/Score', () => () => <div data-testid="score" />)

test('renders correct text', () => {
  render(<Header />);
  expect(screen.getByText(/nba memory card/i)).toBeInTheDocument();
});

test('renders correct number of Score components', () => {
  render(<Header />);
  expect(screen.getAllByTestId(/score/).length).toBe(2);
});
