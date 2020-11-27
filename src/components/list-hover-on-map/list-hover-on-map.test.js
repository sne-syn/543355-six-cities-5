import React from 'react';
import renderer from 'react-test-renderer';
import {ListHoverOnMap} from './list-hover-on-map';
jest.mock(`../list/list`, () => `List`);

const noop = () => {};
const offers = [];

test(`ListHoverOnMap render`, () => {
  const tree = renderer
  .create(
      <ListHoverOnMap
        highlightedOfferID={`5`}
        type={`cities`}
        offers={offers}
        resetActiveCardIdAction={noop}
        setActiveCardIdAction={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
