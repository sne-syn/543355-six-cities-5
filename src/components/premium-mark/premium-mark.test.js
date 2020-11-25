import React from 'react';
import renderer from 'react-test-renderer';
import PremiumMark from './premium-mark';

test(`Render PremiumMark`, () => {
  const tree = renderer
    .create(
        <PremiumMark
          componentName={`place-card`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
