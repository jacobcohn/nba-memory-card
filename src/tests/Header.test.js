import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('renders correct text', () => {
  render(<Header />);
  expect(screen.getByText(/nba memory card/i)).toBeInTheDocument();
});
