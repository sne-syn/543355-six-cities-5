import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../card/card';
import LocationsItem from '../../locations-item/locations-item';

const FavoritesList = ({favoritesOffersOnly}) => {
  const someOffers = favoritesOffersOnly.filter(((offer) => {
    return offer.city === `Amsterdam`;
  }));

  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <LocationsItem cityName={favoritesOffersOnly[1].city} activeCity={favoritesOffersOnly[1].city} tab={false}/>
          </div>
        </div>
        <div className="favorites__places">
          {someOffers.map((offer) => {
            return (
              <Card
                cardType={`favorites`}
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
