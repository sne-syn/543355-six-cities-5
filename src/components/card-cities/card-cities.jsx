import CardDetails from '../card-details/card-details';
import PropTypes from 'prop-types';
import React from 'react';

const CardCities = (props) => {
  const {offer, setActiveCardIdAction, resetActiveCardIdAction} = props;
  return (
    <article id={`${offer.id}`} className={`place-card cities__place-card`} onMouseEnter={setActiveCardIdAction} onMouseLeave={resetActiveCardIdAction}>
      <CardDetails offer={offer} {...props}/>
    </article>
  );
};

CardCities.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  setActiveCardIdAction: PropTypes.func.isRequired,
  resetActiveCardIdAction: PropTypes.func.isRequired
};

export default CardCities;
