import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('displays Hello message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello from V2/i);
  expect(linkElement).toBeInTheDocument();
});
