import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Score from '../components/Score';

test('renders correct default props', () => {
  render(<Score />);
  expect(screen.getByText(/score/i)).toBeInTheDocument();
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('renders correct title', () => {
  const testedTitle = "High Score";
  render(<Score title={testedTitle}/>);
  expect(screen.getByText(testedTitle)).toBeInTheDocument();
});

test('renders correct score', () => {
  const testedScore = 5;
  render(<Score score={testedScore}/>);
  expect(screen.getByText(testedScore)).toBeInTheDocument();
});
