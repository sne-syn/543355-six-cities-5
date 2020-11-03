import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import LocationsItem from '../../locations-item/locations-item';

const FavoritesList = ({favoritesOffers}) => {
  let collectCititesWithFavorites = new Set();
  for (let value of favoritesOffers) {
    collectCititesWithFavorites.add(value.city);
  }
  let citiesWithFavoritesOffers = Array.from(collectCititesWithFavorites);

  return (
    <ul className="favorites__list">
      {citiesWithFavoritesOffers.map((city, i) => {
        return (
          <li key={`city-${i}`} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <LocationsItem cityName={city} />
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
};

export default FavoritesList;
