import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../header/header';
import Footer from './../../footer/footer';
import FavoritesMainEmpty from '../../favorites/favorites-main-empty/favorites-main-empty';
import FavoritesMainOffers from '../../favorites/favorites-main-offers/favorites-main-offers';

const getFavoriteComponent = (offers) => {
  if (offers.length === 0) {
    return <FavoritesMainEmpty />;
  } else {
    return <FavoritesMainOffers offers={offers} />;
  }
};

const FavoritesPage = ({isLogged, offers}) => {
  const favoritesOffersOnly = offers.filter((offer) => {
    return offer.isFavorite === true;
  });
  let favoritesClassName = `page__main page__main--favorites`;
  if (offers.length === 0) {
    favoritesClassName += `page__main--favorites-empty`;
  }
  return (
    <div className="page">
      <Header isLogged={isLogged}/>
      <main className={favoritesClassName} >
        {getFavoriteComponent(favoritesOffersOnly)}
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoritesPage;
