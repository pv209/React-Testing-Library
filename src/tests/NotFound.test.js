import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('show the not found page with all the elements', () => {
  renderWithRouter(<App />, { route: '/qualquer-rota' });

  const notFoundText = screen.getByRole('heading', {
    name: /Page requested not found/i,
    level: 2,
  });

  const notFoundImg = screen.getByRole('img', {
    name: /Pikachu crying because the page requested was not found/,
  });
  const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(notFoundImg).toHaveAttribute('src', src);
  expect(notFoundText).toBeInTheDocument();
});
