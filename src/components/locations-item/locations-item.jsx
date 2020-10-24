import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const LocationsItem = ({cityName, activeCity, tab}) => {
  let locationItemClass = `locations__item-link`;
  locationItemClass += (tab && cityName === activeCity) ? ` tabs__item--active tabs__item` : ``;
  locationItemClass += (tab) ? ` tabs__item` : ``;

  return (
    <Link to="/" className={locationItemClass} href="#">
      <span>{cityName}</span>
    </Link>
  );
};

LocationsItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  tab: PropTypes.bool.isRequired
};

export default LocationsItem;
