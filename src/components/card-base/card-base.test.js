import React from 'react';
import renderer from 'react-test-renderer';
import {ComponentType} from '../../utils/const';
import CardBase from './card-base';
import {offer} from '../../test-data/offer-test-data';

jest.mock(`../card-cities/card-cities`, () => `CardCities`);
jest.mock(`../card-details/card-details`, () => `CardDetails`);

const noop = () => {};

describe(`<CardBase /> test`, () => {
  it(`renders CardBase for cities list`, () => {
    const tree = renderer
    .create(
        <CardBase
          offer={offer}
          type={ComponentType.CITIES}
          highlightedOfferID={`0`}
          resetActiveCardIdAction={noop}
          setActiveCardIdAction={noop}/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardBase for favorites list`, () => {
    const tree = renderer
    .create(
        <CardBase
          offer={offer}
          type={ComponentType.FAVORITE}/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardBase for near-places list`, () => {
    const tree = renderer
    .create(
        <CardBase
          offer={offer}
          type={ComponentType.NEAR}/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
