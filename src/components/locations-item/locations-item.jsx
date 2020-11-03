import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const LocationsItem = ({cityName, activeCity, tab, changeLocation}) => {
  let locationItemClass = `locations__item-link`;
  locationItemClass += (tab && cityName === activeCity) ? ` tabs__item--active tabs__item` : ``;
  locationItemClass += (tab) ? ` tabs__item` : ``;

  return (
    <Link to="/" className={locationItemClass} onClick={changeLocation}>
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
    favoritesOffers: state.filteredOffers,
    activeCity: state.activeElement,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showFavoritesElements() {
    dispatch(ActionCreator.showFavoritesElements());
  },
  changeLocation(evt) {
    dispatch(ActionCreator.changeActiveElement(evt));
  }
});

export {LocationsItem};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsItem);
