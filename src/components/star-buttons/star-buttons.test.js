import React from 'react';
import renderer from 'react-test-renderer';
import {StarButtons} from './star-buttons';

const noop = () => {};
test(`Render StarButtons`, () => {
  const tree = renderer
    .create(<StarButtons 
      onChange={noop}
      onStarClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
