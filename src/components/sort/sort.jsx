import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from 'prop-types';
import withToggler from '../../HOCs/with-toggler';
import {SortType} from '../../utils/const';

const getSortOptions = (toggleComponent, activeSortType) => {
  let sortOptions = [];
  for (let [key, value] of SortType) {
    const isActive = (value === activeSortType) ? `places__option--active` : ``;
    sortOptions.push(<li key={key} className={`places__option ${isActive}`} tabIndex="0" onClick={toggleComponent}>{value}</li>);
  }

  return sortOptions;
};

const Sort = ({toggleComponent, on, activeSortType, changeSortType}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleComponent}> {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${on && (`places__options--opened`)}`} onClick={changeSortType}>
        {getSortOptions(toggleComponent, activeSortType)}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  toggleComponent: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
  activeSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    activeSortType: state.activeSortType
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeSortType(evt) {
    dispatch(ActionCreator.changeSortType(evt));
  }
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(withToggler(Sort));
