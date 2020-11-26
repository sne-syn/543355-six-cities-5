import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

test(`Render Header`, () => {
  const tree = renderer
    .create(<Header userEmail={``} authorizationStatus={`NO_AUTH`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
