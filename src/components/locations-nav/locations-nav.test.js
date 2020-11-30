import React from 'react';
import renderer from 'react-test-renderer';
import LocationsNav from './locations-nav';

jest.mock(`../locations-item/locations-item`, () => `LocationsItem`);

test(`Render LocationsNav`, () => {
  const tree = renderer
    .create(<LocationsNav tab={true} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
