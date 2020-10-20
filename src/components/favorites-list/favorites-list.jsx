import React from 'react';
import PropTypes from 'prop-types';
import CardFavorites from '../card/card-favorites/card-favorites';
import LocationsItem from '../locations-item/locations-item';

const FavoritesList = ({favoritesOffersOnly}) => {
  const someOffers = favoritesOffersOnly.filter(((offer) => {
    return offer.city === `Amsterdam`;
  }));

  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <LocationsItem cityName={favoritesOffersOnly[1].city} />
        </div>
        <div className="favorites__places">
          {someOffers.map((offer) => {
            return (
              <CardFavorites
                key={offer.id}
                offer={offer}
              />
            );
          })}
        </div>
      </li>
    </ul>
  );
};

FavoritesList.propTypes = {
  favoritesOffersOnly: PropTypes.array.isRequired
};

export default FavoritesList;
