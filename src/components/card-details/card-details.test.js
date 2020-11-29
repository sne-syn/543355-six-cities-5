import React from 'react';
import renderer from 'react-test-renderer';
import CardDetails from './card-details';
import {ComponentType} from '../../utils/const';
import {MemoryRouter} from 'react-router-dom';
import {offer, offerPremium} from '../../test-data/offer-test-data';

jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);
jest.mock(`../premium-mark/premium-mark`, () => `PremiumMark`);
jest.mock(`../star-bar/star-bar`, () => `StarBar`);

const noop = () => {};


describe(`<CardDetails /> test`, () => {
  it(`renders CardDetails for cities list`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offer}
            type={ComponentType.CITIES}
            highlightedOfferID={`0`}
            resetActiveCardIdAction={noop}
            setActiveCardIdAction={noop}>
            <React.Fragment />
          </CardDetails>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardDetails for favorites list`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offer}
            type={ComponentType.FAVORITE}/>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardDetails for near-places list`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offer}
            type={ComponentType.NEAR}/>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardDetails with Premium-mark`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offerPremium}
            type={ComponentType.NEAR}/>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

