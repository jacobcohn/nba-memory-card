import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../components/Main';

const exampleNBAImages = [
  {name: "1", src: "1"}, 
  {name: "2", src: "2"}, 
  {name: "3", src: "3"}, 
];

jest.mock('../components/utils/nbaImages', () => exampleNBAImages);
jest.mock('../components/Card', () => () => <div data-testid="card" />)

test('renders correct number of Card components', () => {
  render(<Main />);
  expect(screen.getAllByTestId(/card/).length).toBe(exampleNBAImages.length);
});
