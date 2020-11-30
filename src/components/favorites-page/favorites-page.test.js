import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritesPage} from './favorites-page';
import {offers} from '../../test-data/offers-test-data';

jest.mock(`../favorites-main-empty/favorites-main-empty`, () => `FavoritesMainEmpty`);
jest.mock(`../favorites-main-offers/favorites-main-offers`, () => `FavoritesMainOffers`);
jest.mock(`../footer/footer`, () => `Footer`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../loader/loader`, () => `Loader`);

const noop = () => {};

describe(`<FavoritesPage /> test`, () => {
  it(`renders FavoritesPage with loader`, () => {
    const tree = renderer
    .create(
        <FavoritesPage loading={true} favorites={offers} showFavoritesElementsAction={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders FavoritesPage without offers`, () => {
    const tree = renderer
    .create(
        <FavoritesPage loading={false} favorites={[]} showFavoritesElementsAction={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders FavoritesPage with multiple offers`, () => {
    const tree = renderer
    .create(
        <FavoritesPage loading={false} favorites={offers} showFavoritesElementsAction={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
