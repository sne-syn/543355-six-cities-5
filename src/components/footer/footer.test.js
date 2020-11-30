import Footer from './footer';
import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

test(`Render Footer`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Footer/>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
