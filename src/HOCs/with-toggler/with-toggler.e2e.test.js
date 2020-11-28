import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withToggler from './with-toggler';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggler(MockComponent);
const onDefaultState = false;

describe(`WithToggler checks`, () => {
  it(`Should on defaultState eq 'false'`, () => {
    const wrapper = shallow(<MockComponentWrapped toggleComponent={() => {}}/>);
    expect(wrapper.state().on).toEqual(onDefaultState);
  });
  it(`Should recieve state from Component and be eq 'true`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          defaultOnValue={true}
          toggleComponent={() => {}}
        />
    );
    expect(wrapper.props().on).toEqual(true);
  });
  // it(`Should change onClick`, () => {
  //   const wrapper = shallow(
  //       <MockComponentWrapped
  //         defaultOnValue={true}
  //         toggleComponent={() => {}}
  //       />
  //   );

  //   expect(wrapper.props().on).toEqual(true);
  //   wrapper.props().onClick(false);
  //   expect(wrapper.props().on).toEqual(false);
  // });
});
