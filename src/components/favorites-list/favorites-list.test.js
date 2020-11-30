import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritesList} from './favorites-list';
import {offers} from '../../test-data/offers-test-data';

jest.mock(`../favorites-cards-list/favorites-cards-list`, () => `FavoritesCardsList`);
jest.mock(`../locations-item/locations-item`, () => `LocationsItem`);

const noop = () => {};

describe(`<FavoritesList /> test`, () => {
  it(` should render FavoritesList correctly`, () => {
    const tree = renderer.create((
      <FavoritesList
        activeElement={`Paris`}
        favorites={[offers[0]]}
        changeLocation={noop}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render FavoritesList correctly with multiple favorites`, () => {
    const tree = renderer.create((
      <FavoritesList
        activeElement={`Amsterdam`}
        favorites={offers}
        changeLocation={noop}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
