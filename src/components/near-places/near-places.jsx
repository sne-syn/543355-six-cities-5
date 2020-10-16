import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
const NEAR_PLACE_CARD_COUNT = 3;

const NearPlaces = ({offers, onCardClick}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>

      <PlacesList cardListClass={`near-places__list`} containerCardClass={`near-places__card`} imageCardClass={`near-places__image-wrapper`} offers={offers} onCardClick={onCardClick} cardsCount={NEAR_PLACE_CARD_COUNT}/>

    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default NearPlaces;
