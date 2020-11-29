import React from 'react';
import renderer from 'react-test-renderer';
import List from './list';
import {offers} from '../../test-data/offers-test-data';

test(`Render List`, () => {
  const tree = renderer
    .create(<List
      type={`cities__places-list tabs__content`}
      offers={offers}
    >
      <React.Fragment />
    </ List>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
