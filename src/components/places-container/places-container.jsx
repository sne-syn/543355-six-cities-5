import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';

const PlacesContainer = ({filteredOffers, activeCity, onCardClick}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} {filteredOffers.length === 1 ? `place` : `places`} to stay in {activeCity}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          {/* <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>*/}
        </form>
        <PlacesList offers={filteredOffers} onCardClick={onCardClick}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
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
