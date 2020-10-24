import React from 'react';
import PropTypes from 'prop-types';
import FavoritesMain from '../favorites-main';
import FavoritesList from '../favorites-list/favorites-list';

const FavoritesMainOffers = (props) => {
  const {offers} = props;
  return (
    <FavoritesMain className={`page__main--favorites`} {...props}>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favoritesOffersOnly={offers}/>
        </section>
      </div>
    </FavoritesMain>
  );
};

FavoritesMainOffers.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesMainOffers;
