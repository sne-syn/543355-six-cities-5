import React from 'react';
import PropTypes from 'prop-types';
import FavoritesList from '../favorites-list/favorites-list';

const FavoritesMainOffers = (props) => {
  const {offers} = props;
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesList favoritesOffersOnly={offers}/>
      </section>
    </div>
  );
};

FavoritesMainOffers.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesMainOffers;
