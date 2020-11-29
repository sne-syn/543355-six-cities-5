import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withToggler from './with-toggler';

configure({adapter: new Adapter()});
const noop = () => {};
const MockComponent = () => <div />;
const MockComponentWrapped = withToggler(MockComponent);
const onDefaultState = false;
const onToggleComponent = jest.fn();
const component = <MockComponentWrapped toggleComponent={noop}/>
let wrapper;

beforeEach(() => {
  wrapper = shallow(component);
});

afterEach(() => {
  wrapper.unmount();
});

describe(`WithToggler checks`, () => {
  it(`Should on defaultState eq 'false'`, () => {
    expect(wrapper.state().on).toEqual(onDefaultState);
  });
  it(`Should recieve state from Component and be eq 'true`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          defaultOnValue={true}
          toggleComponent={onToggleComponent}
        />
    );
    expect(wrapper.state().on).toEqual(true);
  });
});
