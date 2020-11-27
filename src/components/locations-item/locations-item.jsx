import PropTypes from 'prop-types';
import React from 'react';
import {AppRoute} from '../../utils/const';
import {Link} from 'react-router-dom';
import {changeActiveElement} from '../../store/action';
import {connect} from 'react-redux';
import {getActiveElement} from '../../store/offers-data/offers-data-selectors';

const LocationsItem = ({cityName, activeCity, tab, changeLocation}) => {
  let locationItemClass = `locations__item-link`;
  locationItemClass += (tab && cityName === activeCity) ? ` tabs__item--active tabs__item` : ``;
  locationItemClass += (tab) ? ` tabs__item` : ``;

  return (
    <Link to={AppRoute.ROOT} className={locationItemClass} onClick={changeLocation}>
      <span>{cityName}</span>
    </Link>
  );
};

LocationsItem.defaultProps = {
  activeCity: ``,
  tab: false
};

LocationsItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  tab: PropTypes.bool.isRequired,
  changeLocation: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeCity: getActiveElement(state),
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeLocation(evt) {
    dispatch(changeActiveElement(evt));
  }
});

export {LocationsItem};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(LocationsItem));
