import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from '../card-details/card-details';

const CardCities = (props) => {
  const {offer, setActiveCardID, resetActiveCardID} = props;
  return (
    <article id={`${offer.id}`} className={`place-card cities__place-card`} onMouseEnter={setActiveCardID} onMouseLeave={resetActiveCardID}>
      <CardDetails offer={offer} {...props}/>
    </article>
  );
};

CardCities.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
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
  setActiveCardID: PropTypes.func.isRequired,
  resetActiveCardID: PropTypes.func.isRequired
};

export default CardCities;
