import FavoritesList from '../favorites-list/favorites-list';
import React from 'react';

const FavoritesMainOffers = (props) => {
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesList {...props}/>
      </section>
    </div>
  );
};

export default FavoritesMainOffers;
