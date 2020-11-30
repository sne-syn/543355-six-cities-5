import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

jest.mock(`../main-page/main-page`, () => `MainPage`);

test(`Render App`, () => {
  const tree = renderer
    .create(<App authorizationStatus={`AUTH`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
