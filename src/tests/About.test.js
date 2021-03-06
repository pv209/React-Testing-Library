import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Teste se a página contém as informações sobre a Pokédex.', () => {
  renderWithRouter(<App />, { route: '/about' });

  const aboutHeading = screen.getByRole('heading', {
    name: /About Pokédex/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
  const text1 = 'This application simulates a Pokédex, a digital'
  + ' encyclopedia containing all Pokémons';
  const aboutText1 = screen.getByText(text1);
  expect(aboutText1).toBeInTheDocument();

  const text2 = 'One can filter Pokémons by type,'
  + ' and see more details for each one of them';
  const aboutText2 = screen.getByText(text2);
  expect(aboutText2).toBeInTheDocument();

  const aboutImg = screen.getByRole('img', {
    name: /Pokédex/,
  });
  const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  expect(aboutImg).toHaveAttribute('src', src);
});
