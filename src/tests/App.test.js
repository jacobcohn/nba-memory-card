import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

jest.mock('../components/Header', () => () => <div data-testid="header" />);
jest.mock('../components/Main', () => () => <div data-testid="main" />);
jest.mock('../components/Footer', () => () => <div data-testid="footer" />);
jest.mock('../components/utils/nbaImages', () => [1, 2, 3]);

test('renders Header component', () => {
  render(<App />);
  expect(screen.getByTestId(/header/)).toBeInTheDocument();
});

test('renders Main component', () => {
  render(<App />);
  expect(screen.getByTestId(/main/)).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  expect(screen.getByTestId(/footer/)).toBeInTheDocument();
});
