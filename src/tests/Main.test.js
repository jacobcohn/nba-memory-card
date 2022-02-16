import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../components/Main';

jest.mock('../components/Card', () => () => <div data-testid="card" />)

test('renders correct number of Card components', () => {
  render(<Main />);
  expect(screen.getAllByTestId(/card/).length).toBe(16);
});
