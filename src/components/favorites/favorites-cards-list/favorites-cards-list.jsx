import React from 'react';
import PropTypes from 'prop-types';
import CardBase from '../../card-base/card-base';

const FavoritesCardsList = ({offers, city}) => {
  const favoritesOffersByCity = offers.filter((offer) => {
    return offer.city === city;
  });
  return (
    <div className="favorites__places">
      {favoritesOffersByCity.map((offer) => {
        return (
          <CardBase
            type={`favorites`}
            key={offer.id}
            offer={offer}
          />
        );
      })}
    </div>
  );
};

FavoritesCardsList.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};

export default FavoritesCardsList;
