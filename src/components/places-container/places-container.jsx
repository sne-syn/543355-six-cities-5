import React from 'react';
import PropTypes from 'prop-types';
import Sort from '../sort/sort';
import MapSection from '../map-section/map-section';
import ListCities from '../list-cities/list-cities';
import {CountCards} from '../../utils/const';

const PlacesContainer = ({filteredOffers, activeCity}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} {filteredOffers.length === 1 ? `place` : `places`} to stay in {activeCity}</b>
        <Sort />
        <ListCities listClass={`cities__places-list tabs__content places__list`} filteredOffers={filteredOffers} countCards={CountCards.MAIN_LIST} />
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
};

export default PlacesContainer;
