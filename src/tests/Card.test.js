import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

test('renders correct image', () => {
  render(<Card src={"testSrc"} name={"testName"}/>);
  expect(screen.getByAltText(/testname logo/i)).toBeInTheDocument();
});
