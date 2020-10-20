import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

const CardType = {
  cardType: `favorites`,
  containerClass: `favorites__card`,
};

const CardFavorites = (props) => {
  return (
    <Card type={CardType} {...props}/>
  );
};

CardFavorites.propTypes = {
  props: PropTypes.any
};

export default CardFavorites;
