import React from 'react';
import PropTypes from 'prop-types';
import Header from './../header/header';
import FavoritesContent from '../favorites-content/favorites-content';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Footer from './../footer/footer';

const FavoritesPage = ({isLogged, offers}) => {
  const favoritesOffersOnly = offers.filter((offer) => {
    return offer.isFavorite === true;
  });
  return (
    <div className="page">
      <Header isLogged={isLogged}/>
      {favoritesOffersOnly.length > 0 ? (<FavoritesContent favoritesOffersOnly={favoritesOffersOnly}/>) : (<FavoritesEmpty />)}
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoritesPage;
