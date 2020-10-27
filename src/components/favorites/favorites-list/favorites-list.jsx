import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import LocationsItem from '../../locations-item/locations-item';

const FavoritesList = ({offers}) => {
  let countObj = new Set();
  for (let value of offers) {
    countObj.add(value.city);
  }
  let citiesWithFavoritesOffers = Array.from(countObj);

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
            <FavoritesCardsList city={city} offers={offers}/>

          </li>
        );
      })
      }
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
