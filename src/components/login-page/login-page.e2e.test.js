import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginPage} from './login-page';
import {AuthorizationStatus} from '../../utils/const';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import rootReducer from '../../store/root-reducer';

configure({adapter: new Adapter()});
const mockStore = configureStore()
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../locations-item/locations-item`, () => `LocationsItem`);

it(`LoginPage should be updated on form submit`, () => {
  const handleSubmit = jest.fn();
  const store = mockStore({})
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage
          activeElement={`Amsterdam`}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          onSubmit={handleSubmit}
        />
      </BrowserRouter>
    </Provider>
  );

  wrapper.find(`input[name="email"]`).instance().value = `trust_no_1@gmail.com`;
  wrapper.find(`input[name="password"]`).instance().value = `password123`;
  wrapper.find(`form.login__form`).simulate(`submit`, {preventDefault: () => {}});

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenNthCalledWith(1, {
    login: `trust_no_1@gmail.com`,
    password: `password123`,
  });
});
