import React from 'react';
import Toggler from '../toggler/toggler';

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_HIGH: `Price: low to high`,
  PRICE_HIGH_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const Sort = () => {
  return (
    <Toggler renderWithToggle={
      (on, toggleComponent) => {
        return (
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0" onClick={toggleComponent}> Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className={`places__options places__options--custom ${on && (`places__options--opened`)}`}>
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
        );
      }} />
  );
};

export default Sort;
