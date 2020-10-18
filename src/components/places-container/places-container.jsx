import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
import Sort from '../sort/sort';
import MapSection from '../map-section/map-section';
import {CountCards} from '../../utils/const';

const PlacesContainer = ({filteredOffers, activeCity, onCardClick}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} {filteredOffers.length === 1 ? `place` : `places`} to stay in {activeCity}</b>
        <Sort />
        <PlacesList cardListClass={`cities__places-list tabs__content`} containerCardClass={`cities__place-card`} imageCardClass={`cities__image-wrapper`} offers={filteredOffers} onCardClick={onCardClick} cardsCount={CountCards.MAIN_LIST}/>
      </section>
      <div className="cities__right-section">
        <MapSection sectionName={`cities`}/>
      </div>
    </div>
  );
};

PlacesContainer.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default PlacesContainer;
