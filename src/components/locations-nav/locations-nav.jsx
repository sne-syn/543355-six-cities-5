import React from 'react';
import PropTypes from 'prop-types';
import LocationsItem from '../locations-item/locations-item';
import {CITIES} from '../../utils/const';

const LocationsNav = ({currentCity, onLocationChange}) => {
  const citiesList = CITIES;
  return (
    <ul className = "locations__list tabs__list" >
      {citiesList.map((city, i) => (
        <li key={i} className="locations__item" onClick={onLocationChange}>
          <LocationsItem cityName={city} activeCity={currentCity} tab={true}/>
        </li>
      ))}
    </ul>
  );
};

LocationsNav.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired
};

export default LocationsNav;
