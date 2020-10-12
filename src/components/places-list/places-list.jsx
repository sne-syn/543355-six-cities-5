import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
const PLACE_CARD_COUNT = 4;

const PlacesList = (props) => {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, PLACE_CARD_COUNT).map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
