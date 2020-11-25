import React from 'react';
import renderer from 'react-test-renderer';
import StarBar from './star-bar';

test(`Render StarBar`, () => {
  const tree = renderer
    .create(
        <StarBar
          rating={4}
          containerClassName={`place-card`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
