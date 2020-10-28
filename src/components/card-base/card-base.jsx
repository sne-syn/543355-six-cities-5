import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from '../card-details/card-details';
import CardCities from '../card-cities/card-cities';
import {ComponentType} from '../../utils/const';

const getCardElement = (id, offer, type, cardDetailsComponent, props) => {
  switch (type) {
    case ComponentType.CITIES:
      return (
        <CardCities key={id} offer={offer} {...props} >
          {cardDetailsComponent}
        </CardCities>
      );
    case ComponentType.NEAR:
      return (
        <article className="near-places__card place-card">
          {cardDetailsComponent}
        </article>
      );
    case ComponentType.FAVORITE:
      return (
        <article className="favorites__card place-card">
          {cardDetailsComponent}
        </article>
      );
  }

  return ``;
};

const CardBase = (props) => {
  const {offer, type} = props;
  const CardDetailsComponent = <CardDetails {...props} />;
  return (
    getCardElement(offer.id, offer, type, CardDetailsComponent, props)
  );
};

CardBase.propTypes = {
  type: PropTypes.string.isRequired,
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
};

export default CardBase;