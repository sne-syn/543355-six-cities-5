import React from 'react';
import renderer from 'react-test-renderer';
import NearPlaces from './near-places';

jest.mock(`../list/list`, () => `List`);

test(`Render NearPlaces`, () => {
  const tree = renderer
    .create(
        <NearPlaces
          type={`near-places`}
          offers={[]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
