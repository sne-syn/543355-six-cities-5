import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeActiveElement} from '../../../store/action';
import {getActiveElement} from '../../../store/offers-data/offers-data-selectors';
import {getFavorites} from '../../../store/favorites/favorites-selectors';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import LocationsItem from '../../locations-item/locations-item';

const arrangeFavoritesByCity = (favorites) => {
  let collection = new Set();
  for (let value of favorites) {
    collection.add(value.city.name);
  }
  let citiesWithFavoritesOffers = Array.from(collection);
  return citiesWithFavoritesOffers;
};

const FavoritesList = ({favorites, changeLocation}) => {
  const citiesWithFavoritesOffers = arrangeFavoritesByCity(favorites);
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
            <FavoritesCardsList city={city} offers={favorites}/>
          </li>
        );
      })
      }
    </ul>
  );
};

FavoritesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    favorites: getFavorites(state),
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
