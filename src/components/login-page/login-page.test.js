import React from 'react';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../utils/const';
import {LoginPage} from './login-page';
import {MemoryRouter} from 'react-router-dom';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../locations-item/locations-item`, () => `LocationsItem`);
const noop = () => {};

describe(`<LoginPage /> test`, () => {
  it(`renders LoginPage for non-auth user`, () => {
    const tree = renderer
    .create(
        <LoginPage
          activeElement={`Amsterdam`}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          onSubmit={noop} />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders LoginPage with auth user`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <LoginPage
            activeElement={`Paris`}
            authorizationStatus={AuthorizationStatus.AUTH}
            onSubmit={noop}/>
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
