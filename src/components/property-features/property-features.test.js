import React from 'react';
import renderer from 'react-test-renderer';
import PropertyFeatures from './property-features';

const accomodationType = `room`;

test(`Render PropertyFeatures`, () => {
  const tree = renderer
    .create(<PropertyFeatures
      type={accomodationType}
      bedrooms={3}
      maxGuests={2}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
