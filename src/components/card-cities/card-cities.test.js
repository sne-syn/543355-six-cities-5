import React from 'react';
import renderer from 'react-test-renderer';
import CardCities from './card-cities';
import {ComponentType} from '../../utils/const';
import {offer} from '../../test-data/offer-test-data';

jest.mock(`../card-details/card-details`, () => `CardDetails`);

const noop = () => {};

it(`renders CardCities for cities list`, () => {
  const tree = renderer
    .create(
        <CardCities
          offer={offer}
          type={ComponentType.CITIES}
          highlightedOfferID={`0`}
          resetActiveCardIdAction={noop}
          setActiveCardIdAction={noop}>
          <React.Fragment />
        </CardCities>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
