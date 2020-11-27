import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesCardsList from './favorites-cards-list';

it(`FavoritesCardsList is rendered correctly`, () => {
  const tree = renderer.create((
    <FavoritesCardsList
      offers={[]}
      city={`Paris`}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
