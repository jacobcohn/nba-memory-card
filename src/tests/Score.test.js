import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Score from '../components/Score';

test('renders correct default title and score', () => {
  render(<Score />);
  expect(screen.getByText(/score: 0/i)).toBeInTheDocument();
});

test('renders correct title and score', () => {
  render(<Score title={"High Score"} score={5}/>);
  expect(screen.getByText(/high score: 5/i)).toBeInTheDocument();
});
