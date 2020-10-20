import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

const CardType = {
  cardType: `near-places`,
  containerClass: `near-places__card`,
};

const CardNearPlaces = (props) => {
  return (
    <Card type={CardType} {...props}/>
  );
};

CardNearPlaces.propTypes = {
  props: PropTypes.any
};

export default CardNearPlaces;
