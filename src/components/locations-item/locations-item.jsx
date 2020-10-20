import React from 'react';
import PropTypes from 'prop-types';

const LocationsItem = ({cityName}) => {
  return (
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{cityName}</span>
      </a>
    </div>
  );
};

LocationsItem.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default LocationsItem;
