import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../utils/const';

const LocationsNav = ({activeCity, onLocationChange}) => {
  const citiesList = CITIES;
  return (
    <ul className = "locations__list tabs__list" >
      {citiesList.map((city, i) => (
        <li key={i} className="locations__item" onClick={onLocationChange}>
          <a className={`locations__item-link tabs__item ${activeCity === city && `tabs__item--active`}`} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsNav.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired
};

export default LocationsNav;