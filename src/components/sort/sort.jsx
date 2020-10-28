import React from 'react';
import Toggler from '../toggler/toggler';

export const SortType = {
  POPULAR: `popular`,
  PRICE_LOW_HIGH: `low-high`,
  PRICE_HIGH_LOW: `high-low`,
  TOP_RATED: `top`
};

const Sort = () => {
  return (
    <Toggler renderWithToggle={
      (on, toggleComponent) => {
        return (<form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0" onClick={toggleComponent}> Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className={`places__options places__options--custom ${on && (`places__options--opened`)}`}>
            <li className="places__option places__option--active" tabIndex="0" data-sort-type="${SortType.POPULAR}" onClick={toggleComponent}>Popular</li>
            <li className="places__option" tabIndex="0" data-sort-type="${SortType.PRICE_LOW_HIGH}" onClick={toggleComponent}>Price: low to high</li>
            <li className="places__option" tabIndex="0" data-sort-type="${SortType.PRICE_HIGH_LOW}" onClick={toggleComponent}>Price: high to low</li>
            <li className="places__option" tabIndex="0" data-sort-type="${SortType.TOP_RATED}" onClick={toggleComponent}>Top rated first</li>
          </ul>
        </form>
        );
      }} />
  );
};


export default Sort;
