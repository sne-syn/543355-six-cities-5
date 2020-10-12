import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../utils/const';

const Locations = (props) => {
  const citiesList = CITIES;
  const {activeCity} = props;
  return (
    <ul className = "locations__list tabs__list" >
      {citiesList.map((city, i) => (
        <li key={i} className="locations__item">
          <a className={`locations__item-link tabs__item ${activeCity === city && `tabs__item--active`}`} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

Locations.propTypes = {
  activeCity: PropTypes.string.isRequired,
};

export default Locations;
