import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
// import List from '../../list/list';

const CardType = {
  cardType: `cities`,
  containerClass: `cities__place-card`,
};

const CardCities = (props) => {
  return (
    <Card type={CardType} {...props}/>
  );
};

CardCities.propTypes = {
  props: PropTypes.any
};

export default CardCities;
