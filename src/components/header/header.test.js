import React from 'react';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../utils/const';
import {Header} from './header';
import {MemoryRouter} from 'react-router-dom';

describe(`<Header /> snapshots`, () => {
  it(`renders Header for non-auth user`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Header
            userEmail={``}
            authorizationStatus={AuthorizationStatus.NO_AUTH} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders Header with auth user`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Header
            userEmail={`trust_no_1@gmail.com`}
            authorizationStatus={AuthorizationStatus.AUTH} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
