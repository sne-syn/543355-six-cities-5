import PropTypes from 'prop-types';
import React from 'react';
import withToggler from '../../hocs/with-toggler/with-toggler';
import {SortType} from '../../utils/const';
import {changeSortType} from '../../store/action';
import {connect} from 'react-redux';
import {getActiveSortType} from '../../store/offers-data/offers-data-selectors';

const getSortOptions = (toggleComponent, activeSortType) => {
  let sortOptions = [];
  for (let [key, value] of SortType) {
    const isActive = (value === activeSortType) ? `places__option--active` : ``;
    sortOptions.push(<li key={key} className={`places__option ${isActive}`} tabIndex="0" onClick={toggleComponent}>{value}</li>);
  }

  return sortOptions;
};

const Sort = ({toggleComponent, on, activeSortType, changeSortTypeAction}) => {
  let optionsClass = `places__options places__options--custom `;
  optionsClass += on ? `places__options--opened` : ``;
console.log(activeSortType)
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleComponent}> {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={optionsClass} onClick={changeSortTypeAction}>
        {getSortOptions(toggleComponent, activeSortType)}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  toggleComponent: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
  activeSortType: PropTypes.string.isRequired,
  changeSortTypeAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    activeSortType: getActiveSortType(state)
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeSortTypeAction(evt) {
    dispatch(changeSortType(evt));
  }
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(withToggler(Sort));
