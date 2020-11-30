import React from 'react';
import renderer from 'react-test-renderer';
import {SortType} from '../../utils/const';
import {Sort} from './sort';

const noop = () => {};

test(`renders Sort correctly`, () => {
  const tree = renderer
  .create(
      <Sort
        toggleComponent={noop}
        on={true}
        activeSortType={SortType[`PRICE_HIGH_LOW`]}
        changeSortTypeAction={noop}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
