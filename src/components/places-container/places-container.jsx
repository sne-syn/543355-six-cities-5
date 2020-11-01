import React from 'react';
import PropTypes from 'prop-types';
import Sort from '../sort/sort';
import MapSection from '../map-section/map-section';
import {CountCards} from '../../utils/const';
import ListHoverOnMap from '../list-hover-on-map/list-hover-on-map';

const PlacesContainer = ({offers, currentCity}) => {
  const offersToRender = offers.slice(0, CountCards.CITIES_LIST);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {offers.length === 1 ? `place` : `places`} to stay in {currentCity}</b>
        <Sort />
        <ListHoverOnMap type={`cities`} offers={offersToRender}/>
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
  offers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default PlacesContainer;
