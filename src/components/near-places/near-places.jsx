import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
import {CountCards} from '../../utils/const';

const NearPlaces = ({offers, onCardClick}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>

      <PlacesList cardListClass={`near-places__list`} containerCardClass={`near-places__card`} imageCardClass={`near-places__image-wrapper`} offers={offers} onCardClick={onCardClick} cardsCount={CountCards.NEAR_LIST}/>

    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default NearPlaces;
