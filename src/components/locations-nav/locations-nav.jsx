import LocationsItem from '../locations-item/locations-item';
import React from 'react';
import {CITIES} from '../../utils/const';

const LocationsNav = (props) => {
  const citiesList = CITIES;
  return (
    <ul className = "locations__list tabs__list" >
      {citiesList.map((city, i) => (
        <li key={i} className="locations__item">
          <LocationsItem cityName={city} {...props}/>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(LocationsNav);
