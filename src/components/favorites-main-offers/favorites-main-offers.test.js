import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesMainOffers from './favorites-main-offers';

jest.mock(`../favorites-list/favorites-list`, () => `FavoritesList`);

test(`Render FavoritesMainOffers`, () => {
  const tree = renderer
    .create(
        <FavoritesMainOffers
          favorites={[]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
