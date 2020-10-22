import React from 'react';
import PropTypes from 'prop-types';
import Sort from '../sort/sort';
import MapSection from '../map-section/map-section';
import ListCities from '../list-cities/list-cities';
import {CountCards} from '../../utils/const';

const PlacesContainer = ({filteredOffers, currentCity}) => {
  const offersToRender = filteredOffers.slice(0, CountCards.MAIN_LIST);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} {filteredOffers.length === 1 ? `place` : `places`} to stay in {currentCity}</b>
        <Sort />
        <ListCities listClass={`cities__places-list tabs__content places__list`} offersToRender={offersToRender} />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapSection currentCity={currentCity} offersToRender={offersToRender}/>
        </section>
      </div>
    </div>
  );
};

PlacesContainer.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default PlacesContainer;
