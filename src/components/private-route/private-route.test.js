import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {AuthorizationStatus} from '../../utils/const';

describe(`Should PrivateRoute render correctly`, () => {

  it(`Should PrivateRoute render correctly for no-auth user`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              exact={true}
              path={``}
              render={()=>{}}
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PrivateRoute render correctly for auth user`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              exact={true}
              path={``}
              render={()=>{}}
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
