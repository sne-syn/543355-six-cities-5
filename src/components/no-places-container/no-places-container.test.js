import React from 'react';
import renderer from 'react-test-renderer';
import NoPlacesContainer from './no-places-container';

test(`Render NoPlacesContainer`, () => {
  const tree = renderer
    .create(<NoPlacesContainer activeElement={`Paris`}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
