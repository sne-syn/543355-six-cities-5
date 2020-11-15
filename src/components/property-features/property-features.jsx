import PropTypes from 'prop-types';
import React from 'react';
import {AccomodationTypes} from '../../utils/const';

const PropertyFeatures = ({type, bedrooms, maxGuests}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {AccomodationTypes[type]}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
    Max {maxGuests} adults
      </li>
    </ul>
  );
};

PropertyFeatures.propTypes = {
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

export default PropertyFeatures;
