import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from 'prop-types';
import Toggler from '../toggler/toggler';

const Sort = ({activeSortType, changeSortType}) => {
  return (
    <Toggler renderWithToggle={
      (on, toggleComponent) => {
        return (
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0" onClick={toggleComponent}> {activeSortType}
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className={`places__options places__options--custom ${on && (`places__options--opened`)}`} onClick={changeSortType}>
              <li className="places__option" tabIndex="0" onClick={toggleComponent} >Popular</li>
              <li className="places__option" tabIndex="0" onClick={toggleComponent}>Price: low to high</li>
              <li className="places__option" tabIndex="0" onClick={toggleComponent}>Price: high to low</li>
              <li className="places__option" tabIndex="0" onClick={toggleComponent}>Top rated first</li>
            </ul>
          </form>
        );
      }} />
  );
};

Sort.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
