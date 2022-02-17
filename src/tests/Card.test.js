import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from '../components/Card';

test('renders correct image', () => {
  render(<Card src={"testSrc"} name={"testName"}/>);
  expect(screen.getByAltText(/testname logo/i)).toBeInTheDocument();
});

test('when clicked, Card runs onClick function', () => {
  const mockOnClickFn = jest.fn();
  render(<Card src={"testSrc"} name={"testName"} onClick={mockOnClickFn} />);
  expect(mockOnClickFn.mock.calls.length).toBe(0);
  userEvent.click(screen.getByAltText(/testname logo/i));
  expect(mockOnClickFn.mock.calls.length).toBe(1);
});
