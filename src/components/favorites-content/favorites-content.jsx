import React from 'react';
import PropTypes from 'prop-types';
import FavoritesList from '../favorites-list/favorites-list';

const FavoritesContent = ({favoritesOffersOnly}) => {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favoritesOffersOnly={favoritesOffersOnly}/>
        </section>
      </div>
    </main>
  );
};

FavoritesContent.propTypes = {
  favoritesOffersOnly: PropTypes.array.isRequired
};

export default FavoritesContent;
