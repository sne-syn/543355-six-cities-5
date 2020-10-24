import React from 'react';
import FavoritesMain from '../favorites-main';

const FavoritesMainEmpty = (props) => {
  return (
    <FavoritesMain className={`page__main--favorites page__main--favorites-empty`} {...props}>
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
          </div>
        </section>
      </div>
    </FavoritesMain>
  );
};

export default FavoritesMainEmpty;
