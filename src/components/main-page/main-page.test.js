import {MemoryRouter} from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page';
import {offers} from '../../test-data/offers-test-data';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../loader/loader`, () => `Loader`);
jest.mock(`../locations-nav/locations-nav`, () => `LocationsNav`);
jest.mock(`../no-places-container/no-places-container`, () => `NoPlacesContainer`);
jest.mock(`../places-container/places-container`, () => `PlacesContainer`);

const noop = () => {};

describe(`<MainPage /> test`, () => {
  it(`renders MainPage with loader`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <MainPage activeElement={`Paris`} loading={true} offers={offers} fetchOffersAction={noop} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders MainPage without offers`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <MainPage activeElement={`Paris`} loading={false} offers={[]} fetchOffersAction={noop} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders MainPage with multiple offers`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <MainPage activeElement={`Amsterdam`} loading={false} offers={offers} fetchOffersAction={noop} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
