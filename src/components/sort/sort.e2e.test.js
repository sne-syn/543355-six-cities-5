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
  it(`Change sort type`, () => {
    const changeSortTypeAction = jest.fn();
    const onToggleChange = jest.fn();
    let activeSortType = SortType[`DEFAULT`];
    let passedSortType = SortType[`PRICE_LOW_HIGH`];
    const wrapper = shallow(
        <Sort
          toggleComponent={onToggleChange}
          on={true}
          activeSortType={activeSortType}
          changeSortTypeAction={changeSortTypeAction}
        />
    );

    wrapper.find(`.places__option`).at(1).simulate(`click`);
    expect(activeSortType).toBe(passedSortType);
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

    wrapper.find(`ul`).at(0).simulate(`click`);
    expect(changeSortTypeAction).toHaveBeenCalledTimes(1);
    wrapper.find(`li`).at(1).simulate(`click`);
    expect(changeSortTypeAction).toHaveBeenCalledTimes(1);
  });
});
