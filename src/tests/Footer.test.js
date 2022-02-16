import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('renders correct text', () => {
  render(<Footer />);
  expect(screen.getByText(/created by Jacob Cohn/i)).toBeInTheDocument();
});

test('renders correct link', () => {
  render(<Footer />);
  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com/jacobcohn');
});
