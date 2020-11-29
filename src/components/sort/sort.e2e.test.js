import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Sort} from './sort';
import {SortType} from '../../utils/const';

configure({adapter: new Adapter()});

describe(`Sort tests`, () => {
  it(`Open sort`, () => {
    const changeSortTypeAction = jest.fn();
    const onToggleChange = jest.fn();

    const wrapper = shallow(
        <Sort
        toggleComponent={onToggleChange}
        on={true}
        activeSortType={SortType[`DEFAULT`]}
        changeSortTypeAction={changeSortTypeAction}
        />
    );

    wrapper.find(`.places__sorting-type`).simulate(`click`);
    expect(onToggleChange).toHaveBeenCalledTimes(1);
  });
  it(`Click on sort menu item`, () => {
    const changeSortTypeAction = jest.fn();
    const onToggleChange = jest.fn();

    const wrapper = shallow(
        <Sort
        toggleComponent={onToggleChange}
        on={true}
        activeSortType={SortType[`DEFAULT`]}
        changeSortTypeAction={changeSortTypeAction}
        />
    );

    wrapper.find(`.places__option`).first().simulate(`click`);
    expect(changeSortTypeAction).toHaveBeenCalledTimes(1);

  });
});
