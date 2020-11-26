import React from 'react';
import {shallow} from 'enzyme';
import {LocationsItem} from './locations-item';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test(`click on item`, () => {
  const onClick = jest.fn();
  const wrapper = shallow(
      <LocationsItem
        cityName={`Amsterdam`}
        changeLocation={onClick}
      />
  );

  wrapper.find(`.locations__item-link`).simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
