import CardCities from '../card-cities/card-cities';
import CardDetails from '../card-details/card-details';
import PropTypes from 'prop-types';
import React from 'react';
import {ComponentType} from '../../utils/const';
import {offerPropTypesMock} from '../../utils/prop-types-mocks';

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
  offer: offerPropTypesMock,
};

export default CardBase;
