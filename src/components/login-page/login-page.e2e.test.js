import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginPage} from './login-page';
import {AuthorizationStatus} from '../../utils/const';

configure({adapter: new Adapter()});

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../locations-item/locations-item`, () => `LocationsItem`);

it(`LoginPage should be performed on form submit`, () => {
  const handleSubmit = jest.fn();

  const wrapper = mount(
      <LoginPage
      activeElement={`Amsterdam`}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
      onSubmit={handleSubmit}
      />
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
