import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from '../card-details/card-details';

const CardCities = (props) => {
  const {offer, setCardMarkerHover, resetCardMarkerHover} = props;
  return (
    <article id={`${offer.id}`} className={`place-card cities__place-card`} onMouseEnter={setCardMarkerHover} onMouseLeave={resetCardMarkerHover}>
      <CardDetails offer={offer} {...props}/>
    </article>
  );
};

CardCities.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    host: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  setCardMarkerHover: PropTypes.func.isRequired,
  resetCardMarkerHover: PropTypes.func.isRequired
};

export default CardCities;