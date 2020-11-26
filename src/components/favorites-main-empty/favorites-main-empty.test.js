import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesMainEmpty from './favorites-main-empty';

test(`Render FavoritesMainEmpty`, () => {
  const tree = renderer
    .create(<FavoritesMainEmpty />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
