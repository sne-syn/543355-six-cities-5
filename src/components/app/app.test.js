import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

test(`Render App`, () => {
  const tree = renderer
    .create(<App />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
