import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import LocationsItem from '../locations-item/locations-item';
import {CITIES} from '../../utils/const';
import {ActionCreator} from "../../store/action";

const LocationsNav = (props) => {
  const {currentCity, changeLocation} = props;
  const citiesList = CITIES;
  return (
    <ul className = "locations__list tabs__list" >
      {citiesList.map((city, i) => (
        <li key={i} className="locations__item" onClick={changeLocation}>
          <LocationsItem cityName={city} activeCity={currentCity} {...props}/>
        </li>
      ))}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    activeElement: state.activeElement,
    filteredOffers: state.filteredOffers
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeLocation(evt) {
    dispatch(ActionCreator.changeActiveElement(evt));
  }
});

LocationsNav.propTypes = {
  currentCity: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired
};

export {LocationsNav};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsNav);
