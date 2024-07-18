import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Welcome to App", () => {
  test('renders compare machine text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Compare Machines/i);
    expect(linkElement).toBeInTheDocument();
  });
});