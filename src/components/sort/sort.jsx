import React, {PureComponent} from 'react';

export const SortType = {
  POPULAR: `popular`,
  PRICE_LOW_HIGH: `low-high`,
  PRICE_HIGH_LOW: `high-low`,
  TOP_RATED: `top`
};

class Sort extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
    this._toggleSortForm = this._toggleSortForm.bind(this);
  }

  _toggleSortForm() {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  }
  render() {

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._toggleSortForm}> Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.on && (`places__options--opened`)}`}>
          <li className="places__option places__option--active" tabIndex="0" data-sort-type="${SortType.POPULAR}">Popular</li>
          <li className="places__option" tabIndex="0" data-sort-type="${SortType.PRICE_LOW_HIGH}">Price: low to high</li>
          <li className="places__option" tabIndex="0" data-sort-type="${SortType.PRICE_HIGH_LOW}">Price: high to low</li>
          <li className="places__option" tabIndex="0" data-sort-type="${SortType.TOP_RATED}">Top rated first</li>
        </ul>
      </form>
    );
  }
}

export default Sort;
