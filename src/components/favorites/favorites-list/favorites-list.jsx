import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeActiveElement} from '../../../store/action';
import {getActiveElement, getOffers} from '../../../store/offers-data/offers-data-selectors';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import LocationsItem from '../../locations-item/locations-item';

const arrangeFavoritesByCity = (favoritesOffers) => {
  let collection = new Set();
  for (let value of favoritesOffers) {
    collection.add(value.city.name);
  }
  let citiesWithFavoritesOffers = Array.from(collection);
  return citiesWithFavoritesOffers;
};

const FavoritesList = ({favoritesOffers, changeLocation}) => {
  const citiesWithFavoritesOffers = arrangeFavoritesByCity(favoritesOffers);
  return (
    <ul className="favorites__list">
      {citiesWithFavoritesOffers.map((city, i) => {
        return (
          <li key={`city-${i}`} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <LocationsItem cityName={city} onClick={changeLocation}/>
              </div>
            </div>
            <FavoritesCardsList city={city} offers={favoritesOffers}/>
          </li>
        );
      })
      }
    </ul>
  );
};

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    favoritesOffers: getOffers(state),
    activeElement: getActiveElement(state),
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeLocation(evt) {
    dispatch(changeActiveElement(evt));
  }
});

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
