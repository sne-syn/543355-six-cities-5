import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {CITIES} from '../../utils/const';

const LocationsNav = ({currentCity, onLocationChange}) => {
  const citiesList = CITIES;
  return (
    <ul className = "locations__list tabs__list" >
      {citiesList.map((city, i) => (
        <li key={i} className="locations__item" onClick={onLocationChange}>
          <Link to="/" className={`locations__item-link tabs__item ${currentCity === city && `tabs__item--active`}`} href="#">
            <span>{city}</span>
          </Link>
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
