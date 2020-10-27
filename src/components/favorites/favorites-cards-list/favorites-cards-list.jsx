import React from 'react';
import PropTypes from 'prop-types';
import CardBase from '../../card-base/card-base';

const FavoritesCardsList = ({offers}) => {
  return (
    <div className="favorites__places">
      {offers.map((offer) => {
        offer.city === city ?
          (
            <CardBase
              type={`favorites`}
              key={offer.id}
              offer={offer}
            />
          ) : ``;
      })}
    </div>
  );
};

export default FavoritesCardsList;
