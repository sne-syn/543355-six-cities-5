import React from 'react';
import PropTypes from 'prop-types';
import Page from '../page';
import Header from './../../header/header';
import Footer from './../../footer/footer';
import FavoritesMainEmpty from '../../favorites/favorites-main-empty/favorites-main-empty';
import FavoritesMainOffers from '../../favorites/favorites-main-offers/favorites-main-offers';

const getComponent = (offers) => {
  switch (true) {
    case (offers.length === 0):
      return <FavoritesMainEmpty />;
    default:
      return <FavoritesMainOffers offers={offers}/>;
  }
};

const FavoritesPage = ({isLogged, offers}) => {
  const favoritesOffersOnly = offers.filter((offer) => {
    return offer.isFavorite === true;
  });
  return (
    <Page pageClass={`page`}>
      <Header isLogged={isLogged}/>
      {getComponent(favoritesOffersOnly)}
      <Footer />
    </Page>
  );
};

FavoritesPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoritesPage;
